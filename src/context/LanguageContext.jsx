import React, { createContext, useContext, useState } from 'react';
import { translations } from '../translations/translations';

const LanguageContext = createContext();

export const LANGUAGES_LIST = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState('en');

  const t = translations[currentLang] || translations.en;

  const setLanguage = (code) => {
    if (translations[code]) {
      setCurrentLang(code);
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t, LANGUAGES_LIST }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
