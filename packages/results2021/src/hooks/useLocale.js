import { useContext } from "preact/hooks";

import { Locale } from "../lib/i18n";

export function useLocale() {
  const context = useContext(Locale);
  if (context == null) {
    throw new Error(
      "useLanguageContext must be used with a LanguageContextProvider"
    );
  }
  return context;
}
