# Seattle MasterFix Precision Craftsmanship: website

Source for **seattlemasterfix.com**. A Next.js (App Router, TypeScript, Tailwind v4) site that is
exported to plain static files (HTML/CSS/JS), so it can be hosted anywhere static files are served.

Design: the approved "Cinematic redesign" (ink / bronze / parchment, Instrument Serif, Ken Burns
hero, trade marquee, scroll-drawn process timeline, accessible photo lightbox).

> **Remaining "OWNER TO CONFIRM" items are listed below.** Run
> `npm run check:owner` to list them. The registered name (`SEATTLE MASTERFIX PRCSN CRFTSM`, as confirmed against the L&I record) is a single constant in `src/config/site.ts`.

---

## Quick start

Requires Node 20.9+ (Node 20 or 22 is fine).

```bash
npm install          # once
npm run dev          # http://localhost:3000, live reload
npm run build        # writes the finished site to ./out
npm run check:forbidden   # fails if removed claims (e.g. "bonded", star ratings) reappear in ./out
npm start            # serves ./out at http://localhost:3000 (like production)
npm run lint
```

## What is where (beginner's map)

```
.
├── src/
│   ├── app/                  ← the PAGES. One folder = one URL.
│   │   ├── page.tsx            home page            ( / )
│   │   ├── services/           services index + one folder per trade (siding, fencing, tile, laminate, drywall, paint)
│   │   ├── projects/           photo gallery        ( /projects/ )
│   │   ├── how-we-work/        process page
│   │   ├── contact/            estimate form + Calendly
│   │   ├── privacy/ terms/     legal pages
│   │   ├── not-found.tsx       the 404 page
│   │   ├── sitemap.ts robots.ts   generate sitemap.xml and robots.txt
│   │   ├── layout.tsx          wraps every page (fonts, header, footer, cookie banner, skip link)
│   │   └── globals.css         colors, fonts, animations
│   ├── config/
│   │   ├── site.ts           ← ★ EDIT HERE: business name, registration no., phone, address, links
│   │   └── features.ts         on/off switches (crew feedback, held-back photos)
│   ├── content/
│   │   ├── services.ts       ← text for the six trade pages + the 4-step process
│   │   ├── photos.ts         ← list of every published photo with alt text + caption
│   │   └── crewFeedback.ts     the (NOT shown) crew comments, see below
│   ├── components/           reusable pieces (Header, Footer, EstimateForm, ProjectGallery, ...)
│   │   ├── consent/            cookie banner, preferences, click-to-load Calendly
│   │   └── legal/              license line, older-home / permit / 811 notices, optional crew feedback
│   ├── fonts/                self-hosted fonts (.woff2) + their licenses
│   └── lib/                  small helpers (consent storage, focus trap, image loader)
├── public/                   ← files copied as-is to the site: images/, logos/, _headers, _redirects
├── content/                  ← NOT deployed. Notes
│   └── crew-feedback.md        the 5 out-of-state comments + how to publish them properly
├── legacy-static/            ← the ORIGINAL static site (HTML + images), untouched except moved. Not deployed.
├── scripts/                  check-forbidden.mjs, list-owner-todos.mjs
├── ci-templates/             optional GitHub Actions workflows (CI build+checks, manual Pages preview). Copy into .github/workflows/ to enable
├── wrangler.jsonc            Cloudflare deploy config (serves ./out)
├── next.config.ts            static export settings
└── package.json
```

Common edits:

| I want to… | Edit |
|---|---|
| Change the registered business name / address / phone | `src/config/site.ts` (once; flows to header, footer, contact, privacy, terms) |
| Change trade page wording | `src/content/services.ts` |
| Add or remove a photo | put the file in `public/images/services/<trade>/` and add/remove its entry in `src/content/photos.ts` |
| Change privacy / terms text | `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` |

## Hosting and deploying

**What was found (Oct 1, 2026):**
- `seattlemasterfix.com` is served by **Cloudflare** (nameservers `kyle.ns.cloudflare.com` / `tegan.ns.cloudflare.com`, `server: cloudflare`, `cf-cache-status` header).
- The repo's commit checks show a Cloudflare **Workers Builds** project named **`probuild-clone`** (a Worker serving static assets) that builds on every push, plus a GitHub Pages "deploy" job (`bilalsahak.github.io/probuild-clone`, legacy "deploy from branch main /root").
- No `CNAME` file, no `.github/workflows`, no `wrangler`/`netlify`/`vercel` config existed in the repo; the Cloudflare settings live in the Cloudflare dashboard (not visible from the repo).
- Result: the old site worked because the repo root *was* the site (an `index.html`). **After this change the repo root is a Next.js project, so the Cloudflare build must run `npm run build` and publish `./out`.**

**Required Cloudflare change when this PR is merged (owner/dashboard step):**
1. Cloudflare dashboard → Workers & Pages → `probuild-clone` → Settings → Build.
2. **Build command:** `npm ci && npm run build`
3. **Deploy command:** `npx wrangler deploy` (reads `wrangler.jsonc` in this repo, which serves `./out`)
4. Node version: 20 or 22 (set `NODE_VERSION=20` under build variables if needed).
5. Leave the custom domain `seattlemasterfix.com` attached as-is. DNS is unchanged and there is no `CNAME` file to preserve.

Until step 2–3 are done, the **Cloudflare check on this PR may fail or serve a blank site**; that is expected and not a code problem. Verify on the Cloudflare preview URL before merging.

**Other hosts:** `npm run build` produces a self-contained `./out` folder; upload it to any static host. For a GitHub Pages *preview* of a branch, copy `ci-templates/github-actions-preview-pages.yml` to `.github/workflows/` and run it (Settings → Pages → Source: GitHub Actions) or build with `NEXT_PUBLIC_BASE_PATH=/<repo> NEXT_PUBLIC_PREVIEW=1 npm run build` (adds `noindex`).

**Old URLs:** `public/_redirects` 301-redirects the old `/siding.html`-style URLs to the new pages (honored by Cloudflare; ignored elsewhere).

**GitHub Pages note:** the old GitHub Pages site (`bilalsahak.github.io/probuild-clone`, "deploy from main /root") will stop showing a site after merge because root no longer has `index.html`. It is not the production host; consider disabling it (Settings → Pages) or switching its source to the Actions preview workflow.

## What changed from the old static site (summary)

See the PR description for the full list. In short: new Next.js site with the cinematic design; testimonial section, star/"5 Stars"/"80+" badges and Google branding removed; license/registration line on every page; "bonded and insured" language removed; architecture/engineering/MEP copy replaced with permit-coordination wording; copied third-party wording rewritten; lead-safe claim replaced with an older-home notice; consent-aware form; cookie banner with essential-only default; no Google Fonts / Tailwind CDN / Font Awesome CDN / unpkg; rewritten Privacy Policy and Terms; accessibility, JSON-LD, sitemap, robots, 404.

## Crew feedback — how to enable (OFF by default)

The five old "client" quotes are **not** reviews of Seattle MasterFix (the owner says they concern work by crew members in other states before the company operated in Washington). They are kept, unrendered, in `content/crew-feedback.md` and `src/content/crewFeedback.ts`.

An optional component (`src/components/legal/CrewFeedback.tsx`, already placed on the home page) renders them with the required disclaimer, state/year labels, and "Not a Seattle MasterFix customer", with no stars, rating, Google logo or Maps link. It stays invisible until **all** of these are true:
1. `NEXT_PUBLIC_SHOW_CREW_FEEDBACK=true` is set at build time (e.g. `.env.local` or the Cloudflare build variables).
2. For each item in `src/content/crewFeedback.ts`: real `year` and `source` filled in (replacing `[OWNER TO CONFIRM]`) and `consentObtained: true` (written permission from the writer on file; proof of authenticity kept).
3. A Washington attorney has reviewed the wording.

Do not relabel them as reviews, add stars, or link them to a Google profile.

## Photos

The photos are the owner's job-site photos from the old repo. Their provenance (who took them, when, where, for which company, permission) is **unconfirmed (OWNER TO CONFIRM)**. Captions and alt text describe only what is visible and do not claim "completed", location or date. A note on the pages says some photos were taken before Seattle MasterFix operated in Washington; the owner should confirm this statement is accurate or edit `PHOTO_NOTE` in `src/content/photos.ts`.

Seven photos that the legal audit flagged as possibly staged/stock/other-company/not-Seattle (`front`, `siding`, `tile`, `tile5` (palm-tree pool deck), `laminate1`, `paint`, `fencing7` (a deck)) are shown **only in the Paint page's "Project photos" gallery** (files `public/images/services/paint/project-1..7.webp`), at the owner's request, with neutral alt text and the caption "Project photo" and no location, date or "completed" claim. The page says they are general project photos and not all paint work. **Their provenance is still the owner's to-do**; remove any that are not yours to show by deleting the file and its line in `src/content/photos.ts`. The originals are also in `legacy-static/` and git history. The old paint gallery referenced `paint1–12.webp`, which never existed; they are not referenced.

## Accessibility and motion

Skip link, `<main>`, keyboard-operable nav, labeled buttons, visible focus rings, text colors tuned for contrast, honest alt text, lightbox with focus trap / Esc / arrow keys / labels, and `prefers-reduced-motion` stops the hero drift, marquee and transitions. The hero drift is a one-time slow zoom, and the marquee has a Pause button. No automated WCAG audit tool was run beyond the checks listed in the PR; a full manual audit is still advisable.

## Cookies and third parties

- Essential-only by default. A banner offers Accept all / Reject non-essential / Preferences; the choice is kept in `localStorage` (`mf_consent_v1`). The footer has a persistent **Cookie settings** link.
- Calendly is never loaded automatically: the Contact page has a plain link that opens calendly.com in a new tab, and an optional inline calendar that loads only after consent **and** a click on "Load calendar".
- Fonts (Inter, Instrument Serif; SIL OFL) are bundled in `src/fonts/` and served from our own domain.
- No analytics or advertising trackers. If you add any, gate them behind `useConsent()` (see `src/lib/consent.ts`) and update the Privacy Policy.
- The estimate form posts directly to Formspree (`https://formspree.io/f/xnjeedlb`) when submitted.

---

## FOR THE OWNER: to-do list before this goes live

**Must confirm / decide**
1. **Update the address with L&I.** The owner confirmed the current address is 5415 6th Ave NW, Seattle, WA 98107 (shown on the site and in the structured data). The L&I public record still lists **5011 Ravenna Ave NE Unit #1, Seattle, WA 98105**. Update L&I so the public record matches the website (and the Google profile).
2. **Service area** (`serviceArea`; then `serviceAreaConfirmed: true`).
3. **Retention period** for estimate records (`retentionPeriod` in `src/config/site.ts`; shown in the privacy policy).
4. **Photo provenance** for every published photo, including the 7 in the Paint gallery (see "Photos"). Remove anything that is not yours to show.
5. **Crew feedback consent** (see "Crew feedback"). Not shown until done.
6. **EPA lead-safe (RRP) certification**: the "we follow EPA lead-safe practices" claim was removed. If the firm holds EPA/Washington firm certification, add: "We hold EPA/Washington lead-safe renovation firm certification, No. ____" to `src/components/legal/OlderHomeNotice.tsx`; only if true. Also confirm asbestos practices.
7. **Who files permits** (the site says "we prepare and submit the application... as set out in your written contract"). Confirm this is accurate.
8. **Warranty**: the site makes no warranty promise; decide terms and put them in the signed contract.
9. **Which mailbox is monitored**: `info@` vs `estimates@` (both are shown).
10. **Formspree**: check retention/access settings and that notifications arrive; the hosting provider's/Calendly's cookie behavior is not verified.
11. **Trademark clearance** for "MasterFix" (an Australian renovation franchise uses a similar name) and **logo ownership**.
12. **Add the registration number** to Google Business Profile, LinkedIn, Calendly page, email signature, estimates and contracts (RCW 18.27.100).
13. **Contract items (not on the website):** RCW 18.27.114 notice to customer, lien notice, right-to-cancel, dispute resolution, pre-1978 lead pamphlet, warranty.
14. **Make this GitHub repo private and rename it** (it is public and named `probuild-clone`; git history still contains the original clone of another company's site, name, phone and email). Ask an attorney before rewriting history.
15. **Attorney review** of the Privacy Policy and Terms of Use and of the older-home, permit and texting language. This work was prepared from a non-lawyer compliance audit and is not a substitute for attorney review.

**CI workflows:** they are provided as templates in `ci-templates/` (not active) because the account used to open this PR could not create files under `.github/workflows/` (GitHub requires a `workflow` token scope). Copy `github-actions-ci.yml` to `.github/workflows/ci.yml` to get build + lint + forbidden-claims checks on every PR.

**Not done / out of scope:** Google Business Profile and LinkedIn edits; contract templates.
