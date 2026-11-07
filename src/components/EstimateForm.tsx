"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { getFormspreeEndpoint, site } from "@/config/site";
import { services } from "@/content/services";
import { easeCraft } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

type Step = 1 | 2 | 3 | 4;

const budgets = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $40,000",
  "$40,000 – $100,000",
  "$100,000+",
  "Not sure yet",
];

const timelines = [
  "ASAP / emergency",
  "Within 30 days",
  "1–3 months",
  "3–6 months",
  "Planning / exploring",
];

const stepLabels = ["Trade", "Details", "Budget", "Contact"];

export function EstimateForm() {
  const endpoint = useMemo(() => getFormspreeEndpoint(), []);
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const reduce = useReducedMotion();
  // Photos: Formspree file uploads (multipart/form-data) are a paid-plan
  // feature — Personal and up, up to 5 files per submission, 25 MB each,
  // 100 MB total per request. Bill to confirm the Formspree plan includes
  // file uploads and to test one submission with a photo before relying
  // on it; the success screen still tells people they can email photos.
  const MAX_PHOTOS = 5;
  const MAX_PHOTO_MB = 25;
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoError, setPhotoError] = useState("");
  const [form, setForm] = useState({
    projectTypes: [] as string[],
    details: "",
    budget: "",
    timeline: "",
    propertyType: "Residential",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    company: "",
    contactConsent: false,
    smsConsent: false,
    gotcha: "",
  });
  const headingRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const started = useRef(false);
  const stepsSeen = useRef(new Set<number>());

  function markStart() {
    if (started.current) return;
    started.current = true;
    track("form_start", { form_name: "estimate_wizard" });
  }

  // form_step: once per step viewed (drop-off funnel). Step 1 counts only after the form is started.
  useEffect(() => {
    if (step === 1 && !started.current) return;
    if (stepsSeen.current.has(step)) return;
    stepsSeen.current.add(step);
    track("form_step", { form_name: "estimate_wizard", step_number: step, step_name: stepLabels[step - 1] });
  }, [step]);

  // Move focus to the step heading when the step changes (keyboard / screen-reader users).
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.querySelector<HTMLElement>("legend, h2")?.focus();
  }, [step]);

  function toggleType(name: string) {
    setForm((f) => ({
      ...f,
      projectTypes: f.projectTypes.includes(name)
        ? f.projectTypes.filter((t) => t !== name)
        : [...f.projectTypes, name],
    }));
  }

  function onPhotosPicked(files: FileList | null) {
    if (!files) return;
    const picked = Array.from(files);
    const tooBig = picked.find((f) => f.size > MAX_PHOTO_MB * 1024 * 1024);
    if (tooBig) {
      setPhotoError(`${tooBig.name} is over ${MAX_PHOTO_MB} MB. Attach smaller photos, or email them to ${site.email}.`);
      return;
    }
    if (photos.length + picked.length > MAX_PHOTOS) {
      setPhotoError(`Attach up to ${MAX_PHOTOS} photos. Email any extras to ${site.email}.`);
      return;
    }
    setPhotoError("");
    setPhotos((prev) => [...prev, ...picked]);
  }

  function canContinue() {
    if (step === 1) return form.projectTypes.length > 0;
    if (step === 2) return form.details.trim().length > 10;
    if (step === 3) return Boolean(form.budget && form.timeline);
    if (step === 4)
      return (
        form.firstName.trim() &&
        form.lastName.trim() &&
        form.email.trim() &&
        form.phone.trim() &&
        form.contactConsent
      );
    return false;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canContinue()) return;
    if (form.gotcha) {
      // Honeypot filled: a bot. Pretend success, send nothing.
      setStatus("success");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");

    // Multipart (not JSON): the only way file inputs reach Formspree.
    const payload = new FormData();
    const fields: Record<string, string> = {
      _subject: `Project estimate — ${form.projectTypes.join(", ")}`,
      projectTypes: form.projectTypes.join(", "),
      details: form.details,
      budget: form.budget,
      timeline: form.timeline,
      propertyType: form.propertyType,
      firstName: form.firstName,
      lastName: form.lastName,
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      phone: form.phone,
      address: form.address,
      company: form.company,
      // Disclosed in the Privacy Policy: page URL, referrer and submit time are sent with the form.
      contactConsent: "Agreed: may contact by phone or email about this request",
      smsConsent: form.smsConsent
        ? "YES: opted in to text messages about this request"
        : "No: did not opt in to text messages",
      consentRecordedAt: new Date().toISOString(),
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
      _gotcha: form.gotcha,
    };
    for (const [key, value] of Object.entries(fields)) payload.append(key, value);
    // "photos" is the file field Formspree stores; links appear in the
    // notification email and dashboard. Files are not emailed as attachments.
    photos.forEach((file) => payload.append("photos", file));

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Unable to submit right now.");
      }
      setStatus("success");
      track("generate_lead", { form_name: "estimate_wizard", project_types: form.projectTypes.join(", ").slice(0, 100) });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[2px] border border-ink/10 bg-paper p-8 md:p-10"
      >
        <p className="text-eyebrow font-semibold uppercase tracking-[0.22em] text-bronze-deep">
          Received
        </p>
        <h2 className="mt-3 font-display text-3xl text-ink">Request received</h2>
        <h3 className="mt-6 font-display text-xl text-ink">What happens next</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-charcoal/85">
          <li>We review your project details.</li>
          <li>We follow up about next steps — that may be a phone call, a consultation, or a site visit and walkthrough where it makes sense.</li>
          <li>If the scope is agreed, you receive a written estimate. Estimates are non-binding until a written contract is signed.</li>
        </ol>
        {photos.length > 0 ? (
          <p className="mt-4 text-sm leading-relaxed text-charcoal/85">
            Your {photos.length} {photos.length === 1 ? "photo was" : "photos were"} sent with this
            request. If an upload did not go through, email the photos to {site.email} and mention
            your name.
          </p>
        ) : null}
        <p className="mt-4 text-charcoal/85">
          Thank you. Our team will review your project details — we usually reply within
          1 hour. Prefer to talk now? Call{" "}
          <a className="font-semibold text-ink underline decoration-bronze/60" href={site.phoneHref}>
            {site.phone}
          </a>{" "}
          or{" "}
          <a
            className="font-semibold text-ink underline decoration-bronze/60"
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
          >
            book a consultation<span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
      </motion.div>
    );
  }

  const progress = ((step - 1) / 3) * 100;

  return (
    <form
      onSubmit={onSubmit}
      onFocusCapture={() => {
        if (started.current) return;
        markStart();
        if (!stepsSeen.current.has(1)) {
          stepsSeen.current.add(1);
          track("form_step", { form_name: "estimate_wizard", step_number: 1, step_name: stepLabels[0] });
        }
      }}
      className="rounded-[2px] border border-ink/10 bg-paper p-6 shadow-[0_20px_60px_rgba(20,41,63,0.06)] md:p-9"
      noValidate
    >
      <div className="mb-2 flex items-center justify-between gap-4">
        <p className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-bronze-deep">
          Step {step} of 4 · {stepLabels[step - 1]}
        </p>
        <p className="text-eyebrow uppercase tracking-[0.16em] text-charcoal/80">
          {Math.round(progress)}%
        </p>
      </div>
      <div className="mb-8 h-px overflow-hidden bg-ink/10">
        <motion.div
          className="h-full bg-bronze"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: easeCraft }}
        />
      </div>

      <p className="mb-6 text-sm text-charcoal/85">
        Prefer to talk? Call{" "}
        <a className="font-semibold text-ink underline" href={site.phoneHref}>
          {site.phone}
        </a>
        .
      </p>

      <div className="mb-8 flex gap-2" aria-label={`Step ${step} of 4`}>
        {([1, 2, 3, 4] as Step[]).map((s) => (
          <div key={s} className="flex flex-1 flex-col gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-eyebrow font-semibold transition ${
                s <= step ? "bg-ink text-parchment" : "bg-parchment-deep text-charcoal/80"
              }`}
            >
              {s}
            </div>
            <span className="block text-micro uppercase leading-tight tracking-[0.14em] text-charcoal/80">
              {stepLabels[s - 1]}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          ref={headingRef}
          key={step}
          initial={reduce ? false : { opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduce ? undefined : { opacity: 0, x: -12 }}
          transition={{ duration: 0.35, ease: easeCraft }}
        >
          {step === 1 && (
            <fieldset>
              <legend tabIndex={-1} className="font-display text-2xl text-ink md:text-3xl">
                What kind of project?
              </legend>
              <p className="mt-2 text-sm text-charcoal/80">Select all that apply.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {services.map((s) => {
                  const on = form.projectTypes.includes(s.name);
                  return (
                    <button
                      key={s.slug}
                      type="button"
                      onClick={() => toggleType(s.name)}
                      className={`min-h-14 rounded-[2px] border px-4 py-3 text-left text-sm font-medium transition ${
                        on
                          ? "border-bronze bg-bronze/15 text-ink"
                          : "border-ink/25 hover:border-ink/50"
                      }`}
                      aria-pressed={on}
                    >
                      {s.name}
                    </button>
                  );
                })}
              </div>
              <p className="mt-4 text-sm text-charcoal/80">
                Photos help — you can attach up to {MAX_PHOTOS} in the next step.
              </p>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset>
              <legend tabIndex={-1} className="font-display text-2xl text-ink md:text-3xl">
                Tell us about the work
              </legend>
              <label className="mt-6 block text-sm font-medium text-ink" htmlFor="details">
                Project details
              </label>
              <textarea
                id="details"
                required
                rows={6}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                className="mt-2 w-full rounded-[2px] border border-ink/25 bg-field px-3 py-3 text-sm outline-none ring-bronze focus:ring-2"
                placeholder="Scope, materials you have in mind, access notes…"
              />
              <p className="mt-2 text-caption text-charcoal/80" aria-live="polite">
                {form.details.trim().length} characters — at least 10 needed to continue.
              </p>
              <div className="mt-6">
                <label className="text-sm font-medium text-ink" htmlFor="photos">
                  Photos (optional)
                </label>
                <input
                  id="photos"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => onPhotosPicked(e.target.files)}
                  className="mt-2 w-full rounded-[2px] border border-ink/25 bg-field px-3 py-3 text-sm outline-none ring-bronze focus:ring-2"
                />
                <p className="mt-2 text-xs leading-relaxed text-charcoal/80">
                  Attach up to {MAX_PHOTOS} photos ({MAX_PHOTO_MB} MB each). Photos are sent with
                  this request. You can also email photos to {site.email} after you submit;
                  mention your name in the subject line.
                </p>
                {photoError ? (
                  <p className="mt-2 text-xs font-medium text-error" role="alert">
                    {photoError}
                  </p>
                ) : null}
                {photos.length > 0 ? (
                  <ul className="mt-3 space-y-2">
                    {photos.map((file, i) => (
                      <li key={`${file.name}-${i}`} className="flex items-center justify-between gap-3 text-sm">
                        <span className="truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => setPhotos((prev) => prev.filter((_, j) => j !== i))}
                          className="shrink-0 text-xs font-semibold text-ink underline underline-offset-2"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <p className="mt-3 text-xs text-charcoal/80">
                Please don&rsquo;t include Social Security numbers, bank or card details, or other
                sensitive information.
              </p>
            </fieldset>
          )}

          {step === 3 && (
            <fieldset>
              <legend tabIndex={-1} className="font-display text-2xl text-ink md:text-3xl">
                Budget & timeline
              </legend>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-ink">Estimated budget</p>
                  <div className="mt-3 space-y-2">
                    {budgets.map((b) => (
                      <label
                        key={b}
                        className="flex min-h-11 cursor-pointer items-center gap-3 text-sm"
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={b}
                          checked={form.budget === b}
                          onChange={() => setForm({ ...form, budget: b })}
                          className="size-4 accent-ink"
                        />
                        {b}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">Desired timeline</p>
                  <div className="mt-3 space-y-2">
                    {timelines.map((t) => (
                      <label
                        key={t}
                        className="flex min-h-11 cursor-pointer items-center gap-3 text-sm"
                      >
                        <input
                          type="radio"
                          name="timeline"
                          value={t}
                          checked={form.timeline === t}
                          onChange={() => setForm({ ...form, timeline: t })}
                          className="size-4 accent-ink"
                        />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <label
                className="mt-6 block text-sm font-medium text-ink"
                htmlFor="propertyType"
              >
                Property type
              </label>
              <select
                id="propertyType"
                value={form.propertyType}
                onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                className="mt-2 w-full rounded-[2px] border border-ink/25 bg-field px-3 py-3 text-sm outline-none ring-bronze focus:ring-2"
              >
                <option>Residential</option>
                <option>Commercial</option>
                <option>Multi-family</option>
                <option>Other</option>
              </select>
            </fieldset>
          )}

          {step === 4 && (
            <fieldset>
              <legend tabIndex={-1} className="font-display text-2xl text-ink md:text-3xl">
                Contact details
              </legend>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {(
                  [
                    ["firstName", "First name", "text", "given-name"],
                    ["lastName", "Last name", "text", "family-name"],
                    ["email", "Email", "email", "email"],
                    ["phone", "Phone (mobile preferred)", "tel", "tel"],
                  ] as const
                ).map(([id, label, type, ac]) => (
                  <div key={id}>
                    <label className="text-sm font-medium" htmlFor={id}>
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      autoComplete={ac}
                      required
                      value={form[id]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      className="mt-1 w-full rounded-[2px] border border-ink/25 bg-field px-3 py-3 text-sm outline-none ring-bronze focus:ring-2"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium" htmlFor="address">
                    Project address (optional)
                  </label>
                  <input
                    id="address"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="mt-1 w-full rounded-[2px] border border-ink/25 bg-field px-3 py-3 text-sm outline-none ring-bronze focus:ring-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium" htmlFor="company">
                    Company (optional)
                  </label>
                  <input
                    id="company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="mt-1 w-full rounded-[2px] border border-ink/25 bg-field px-3 py-3 text-sm outline-none ring-bronze focus:ring-2"
                  />
                </div>
                <div className="sm:col-span-2 space-y-4 border-t border-ink/10 pt-5">
                  {/* Honeypot: hidden from people, visible to bots. */}
                  <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                    <label htmlFor="website-hp">Leave this field empty</label>
                    <input
                      id="website-hp"
                      type="text"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.gotcha}
                      onChange={(e) => setForm({ ...form, gotcha: e.target.value })}
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-charcoal/90" htmlFor="contactConsent">
                    <input
                      id="contactConsent"
                      type="checkbox"
                      required
                      checked={form.contactConsent}
                      onChange={(e) => setForm({ ...form, contactConsent: e.target.checked })}
                      className="mt-1 size-5 shrink-0 accent-ink"
                    />
                    <span>
                      I agree that Seattle MasterFix may contact me by phone or email about this
                      request. (Required) See our{" "}
                      <Link href="/privacy/" className="font-semibold text-ink underline">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms/" className="font-semibold text-ink underline">
                        Terms of Use
                      </Link>
                      .
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-charcoal/90" htmlFor="smsConsent">
                    <input
                      id="smsConsent"
                      type="checkbox"
                      checked={form.smsConsent}
                      onChange={(e) => setForm({ ...form, smsConsent: e.target.checked })}
                      className="mt-1 size-5 shrink-0 accent-ink"
                    />
                    <span>
                      (Optional) Text me about this request at the mobile number above. Message
                      frequency varies; message and data rates may apply. Reply STOP to opt out,
                      HELP for help. Consent is not a condition of purchase.
                    </span>
                  </label>

                  <p className="text-xs leading-relaxed text-charcoal/80">
                    Your information is processed by Formspree, including any photos you attach. When you submit, we also send the
                    page address, the page you came from, and the time of submission. See our{" "}
                    <Link href="/privacy/" className="underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </fieldset>
          )}
        </motion.div>
      </AnimatePresence>

      {status === "error" ? (
        <p className="mt-4 text-sm font-medium text-error" role="alert">
          {errorMsg || "Something went wrong. Please call us or try again."}
        </p>
      ) : null}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <Button
          type="button"
          variant="secondary"
          disabled={step === 1 || status === "submitting"}
          onClick={() => setStep((s) => (s > 1 ? ((s - 1) as Step) : s))}
        >
          Back
        </Button>
        {step < 4 ? (
          <Button
            type="button"
            variant="dark"
            disabled={!canContinue()}
            onClick={() => setStep((s) => (s < 4 ? ((s + 1) as Step) : s))}
          >
            Continue
          </Button>
        ) : (
          <Button
            type="submit"
            variant="primary"
            disabled={!canContinue() || status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Submit estimate request"}
          </Button>
        )}
      </div>
    </form>
  );
}
