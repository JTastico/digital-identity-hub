import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '@/data/translations';

type Language = 'ES' | 'EN';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.ES;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ES');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ES' ? 'EN' : 'ES'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};