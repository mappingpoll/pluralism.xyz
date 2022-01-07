import { h, Fragment, createContext } from 'preact';
import { useState, useContext } from 'preact/hooks'

import en from '../i18n/en.json';
import fr from '../i18n/fr.json';


export function i18n(locale, path) {
  let keys = path.split('.');

  let result = locale === "en" ? en : fr;

  for (const key of keys) {
    result = result[key];
    if (result == null || !result) return `translation for ${path} needed.`;
  }

  if (typeof result != "string") return `translation for ${path} needed.`;

  return result;
}

export const Locale = createContext();

export function I18nProvider(props) {
  const [userLang, setUserLang] = useState(typeof navigator !== "undefined"
    ? navigator.language.slice(0, 2) === "fr"
      ? "fr"
      : "en"
    : "en"
  )

  function swapLang(lang) {
    if (lang == null) {
      setUserLang(userLang === "en" ? "fr" : "en");
    } else {
      setUserLang(lang);
    }
  }

  return <Locale.Provider value={{ userLang, swapLang, i18n: path => i18n(userLang, path) }}>{props.children}</Locale.Provider>
}

export function useLocale() {
  const context = useContext(Locale);
  if (context == null) {
    throw new Error(
      "useLanguageContext must be used with a LanguageContextProvider"
    );
  }
  return context;
}
