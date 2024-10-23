import React from "react";
import Navbar from "./Components/Navbar.tsx";
import Service from "./Components/Description.tsx";
import Home from "./Components/Home.tsx";
import AdditionalInformation from "./Components/AdditionalInformation.tsx";

import { ChakraProvider, Box } from "@chakra-ui/react"; // Import Box component
import ServiceList from "./Components/ServiceList.tsx";
import { Element } from "react-scroll";
import { LanguageProvider } from "./Components/LanguageContext.tsx";
import StickyButton from "./Components/StickyButton.tsx";
import { useLanguage } from "./Components/LanguageContext.tsx";
import content_en from "./Content/content_en.json";
import content_de from "./Content/content_de.json";
import content_ro from "./Content/content_ro.json";
import LocationMap from "./Components/LocationMap.tsx";
function App() {
  const { language, changeLanguage } = useLanguage();
  const content = {
    en: content_en,
    de: content_de,
    ro: content_ro,
  };
  return (
    <LanguageProvider>
      <ChakraProvider>
        <StickyButton content={content} language={language} />

        <Box bg="gray.100">
          <Navbar />
          <Element name="home">
            <Home />
          </Element>
          <Element name="locationMap">
            <LocationMap/>
          </Element>
          <Element name="description">
            <Service />
          </Element>
          <Element name="services">
            <ServiceList />
          </Element>
        </Box>
      </ChakraProvider>
    </LanguageProvider>
  );
}

export default App;
