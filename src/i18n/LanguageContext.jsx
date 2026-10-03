import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, translations } from "./translations";

const STORAGE_KEY = "lang";

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(stored)) return stored;
  } catch {
    // localStorage unavailable (e.g. privacy mode)
  }
  return DEFAULT_LANGUAGE;
};

const lookup = (dictionary, key) =>
  key.split(".").reduce((value, part) => (value == null ? undefined : value[part]), dictionary);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore persistence errors
    }
  }, [lang]);

  const setLanguage = useCallback((next) => {
    if (SUPPORTED_LANGUAGES.includes(next)) setLang(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === "en" ? "es" : "en"));
  }, []);

  const t = useCallback(
    (key) => lookup(translations[lang], key) ?? lookup(translations[DEFAULT_LANGUAGE], key) ?? key,
    [lang]
  );

  // Resolves a `{ en, es }` field (or returns plain values unchanged).
  const localize = useCallback(
    (value) =>
      value && typeof value === "object" && !Array.isArray(value)
        ? value[lang] ?? value[DEFAULT_LANGUAGE]
        : value,
    [lang]
  );

  const value = useMemo(
    () => ({ lang, t, localize, setLanguage, toggleLanguage }),
    [lang, t, localize, setLanguage, toggleLanguage]
  );

  return <LanguageContext.Provider value={ value }>{ children }</LanguageContext.Provider>;
};

// eslint-disable-next-line react/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
