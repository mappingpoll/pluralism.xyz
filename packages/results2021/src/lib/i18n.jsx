import { h, Fragment, createContext } from "preact";
import { useState } from "preact/hooks";

import en from "../i18n/en.json";
import fr from "../i18n/fr.json";

export function findTranslation(locale, path) {
  let keys = path.split(".");

  let result = locale === "en" ? en : fr;

  for (const key of keys) {
    result = result[key];
    if (result == null || !result) return path;
  }

  if (typeof result != "string") return path;

  return result;
}

export const Locale = createContext();

export function I18nProvider(props) {
  const [userLang, setUserLang] = useState(
    typeof navigator !== "undefined"
      ? navigator.language.slice(0, 2) === "fr"
        ? "fr"
        : "en"
      : "en"
  );

  function swapLang(lang) {
    if (lang == null) {
      setUserLang(userLang === "en" ? "fr" : "en");
    } else {
      setUserLang(lang);
    }
  }

  return (
    <Locale.Provider
      value={{
        userLang,
        swapLang,
        i18n: (path) => findTranslation(userLang, path),
      }}
    >
      {props.children}
    </Locale.Provider>
  );
}
