/**
 * Cookie / third-party consent state.
 *
 * Essential-only by default: until the visitor makes a choice, nothing
 * non-essential is loaded. The choice is stored in the browser's localStorage
 * (first-party, never sent to a server).
 *
 * To add a new consent category (e.g. analytics): add a key to `ConsentChoices`,
 * a toggle in components/consent/PreferencesDialog.tsx, and gate the new script
 * behind `useConsent().choices.<key>`. Do not load it any other way.
 */
export type ConsentChoices = {
  /** Third-party embedded content, currently only the Calendly scheduling embed. */
  embeds: boolean;
};

export type StoredConsent = ConsentChoices & { v: 1; decidedAt: string };

export const CONSENT_KEY = "mf_consent_v1";

export const DEFAULT_CHOICES: ConsentChoices = { embeds: false };

export function readConsent(): StoredConsent | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed && parsed.v === 1 && typeof parsed.embeds === "boolean") return parsed;
  } catch {
    /* storage unavailable or corrupt: treat as undecided */
  }
  return null;
}

export function writeConsent(choices: ConsentChoices): StoredConsent {
  const stored: StoredConsent = { v: 1, ...choices, decidedAt: new Date().toISOString() };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(stored));
  } catch {
    /* ignore: choice still applies for this page view */
  }
  return stored;
}
