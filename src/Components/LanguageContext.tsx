import React, { useState, createContext, useContext } from 'react';

// Create a context
export const LanguageContext = createContext({
    language: 'en',
    changeLanguage: (lang: any) => {},
});
  
// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
