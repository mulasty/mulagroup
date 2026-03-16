"use client";

import type { AppLocale } from "@mulagroup/content-models";
import { useEffect } from "react";

type DocumentLocaleSyncProps = {
  locale: AppLocale;
};

export function DocumentLocaleSync({ locale }: DocumentLocaleSyncProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
