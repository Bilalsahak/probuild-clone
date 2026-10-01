import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/config/site";
import { services } from "@/content/services";
import { LicenseLine } from "@/components/legal/LicenseLine";
import { CookieSettingsButton } from "@/components/consent/CookieSettingsButton";

export function Footer() {
  const year = new Date().getFullYear();
  const link = "inline-flex min-h-11 items-center transition hover:text-bronze-light lg:min-h-0";
  return (
    <footer className="relative overflow-hidden bg-ink text-parchment">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-bronze/10 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-5 pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/logos/seattle-masterfix-logo.svg"
              alt={`${site.name} logo`}
              width={272}
              height={222}
              className="h-24 w-auto md:h-28"
            />
            <p className="mt-6 max-w-sm font-display text-2xl leading-snug text-parchment/95 md:text-3xl">
              Built for Seattle weather.
              <br />
              Finished with care.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-parchment/80">
              Residential and light-commercial remodeling: siding, fencing, tile, laminate
              flooring, drywall, and paint.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <nav aria-label="Footer: site">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze-light">
                Navigate
              </h2>
              <ul className="mt-5 space-y-0 text-sm lg:space-y-2.5 text-parchment/85">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer: trades">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze-light">
                Trades
              </h2>
              <ul className="mt-5 space-y-0 text-sm lg:space-y-2.5 text-parchment/85">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}/`} className={link}>
                      {s.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze-light">
                Contact
              </h2>
              <ul className="mt-5 space-y-0 text-sm lg:space-y-2.5 text-parchment/85">
                <li>
                  <a href={site.phoneHref} className={link}>
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className={link}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.estimatesEmail}`} className={link}>
                    {site.estimatesEmail}
                  </a>
                </li>
                <li className="pt-2">{site.address.full}</li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link}
                  >
                    LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <LicenseLine
          className="border-b border-white/10 py-7 text-xs leading-relaxed text-parchment/85"
          linkClassName="underline underline-offset-2 hover:text-bronze-light"
        />

        <div className="flex flex-col items-start justify-between gap-4 py-7 text-xs text-parchment/80 sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy/" className="inline-flex min-h-11 items-center underline underline-offset-2 hover:text-bronze-light">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms/" className="inline-flex min-h-11 items-center underline underline-offset-2 hover:text-bronze-light">
                Terms of Use
              </Link>
            </li>
            <li>
              <CookieSettingsButton className="inline-flex min-h-11 items-center underline underline-offset-2 hover:text-bronze-light" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
