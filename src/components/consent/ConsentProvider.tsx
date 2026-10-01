"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  ConsentChoices,
  DEFAULT_CHOICES,
  readConsent,
  writeConsent,
} from "@/lib/consent";
import { CookieBanner } from "@/components/consent/CookieBanner";
import { PreferencesDialog } from "@/components/consent/PreferencesDialog";

type Ctx = {
  /** True once localStorage has been read on the client. */
  ready: boolean;
  /** Has the visitor made any choice yet? */
  decided: boolean;
  choices: ConsentChoices;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  save: (c: ConsentChoices) => void;
  openPreferences: () => void;
};

const ConsentContext = createContext<Ctx | null>(null);

export function useConsent(): Ctx {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used inside <ConsentProvider>");
  return ctx;
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [decided, setDecided] = useState(false);
  const [choices, setChoices] = useState<ConsentChoices>(DEFAULT_CHOICES);
  const [prefsOpen, setPrefsOpen] = useState(false);

  // Read the saved choice after mount (localStorage does not exist during static export).
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      setChoices({ embeds: stored.embeds });
      setDecided(true);
    }
    setReady(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const save = useCallback((c: ConsentChoices) => {
    writeConsent(c);
    setChoices(c);
    setDecided(true);
    setPrefsOpen(false);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      ready,
      decided,
      choices,
      acceptAll: () => save({ embeds: true }),
      rejectNonEssential: () => save({ embeds: false }),
      save,
      openPreferences: () => setPrefsOpen(true),
    }),
    [ready, decided, choices, save]
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {ready && !decided && !prefsOpen ? <CookieBanner /> : null}
      {prefsOpen ? <PreferencesDialog onClose={() => setPrefsOpen(false)} /> : null}
    </ConsentContext.Provider>
  );
}
