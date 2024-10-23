import { Select } from "@chakra-ui/react";
import React, { useState } from "react";

const flagIcons = {
  en: "🇬🇧", // Emoji flag for English
  ro: "🇷🇴", // Emoji flag for Romanian
  de: "🇩🇪", // Emoji flag for German
  ru: "🇷🇺", // Emoji flag for Russian
  po: "🇵🇱", // Emoji flag for Polish
};


const LanguageOption = ({ value }) => (
  <option value={value}>
    {flagIcons[value]}
  </option>
);

const LanguageSelect = ({ changeLanguage }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setCurrentLanguage(selectedLanguage);
    changeLanguage(selectedLanguage);
  };

  const getCurrentLanguage = () => {
    return currentLanguage;
  };

  return (
    <>
      <Select maxW={60} textAlign="center" onChange={handleLanguageChange} value={currentLanguage}>
        <LanguageOption value="en" />
        <LanguageOption value="ro" />
        <LanguageOption value="de" />
        <LanguageOption value="ru" />
        <LanguageOption value="po" />
      </Select>
      {/* You can use getCurrentLanguage() wherever needed to get the current language */}
    </>
  );
};

export default LanguageSelect;
