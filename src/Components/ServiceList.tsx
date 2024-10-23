import React, { useState } from "react";
import { Box, Button, Text, Flex, Image } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import towingImage from "../poze/towing.jpeg";
import polishImage from "../poze/polish.jpeg";
import vulcatizationImage from "../poze/vulcanization2.jpeg";
import content_en from "../Content/content_en.json";
import content_de from "../Content/content_de.json";
import content_ro from "../Content/content_ro.json";
import content_ru from "../Content/content_ru.json";
import content_po from "../Content/content_po.json";
import { useLanguage } from './LanguageContext.tsx';



const ServiceList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language, changeLanguage } = useLanguage();
  const content = {
    en: content_en,
    de: content_de,
    ro: content_ro,
    ru: content_ru,
    po: content_po,
  };
  const images = [
    {
      src: towingImage,
      alt: "Towing",
      text: content[language]["carousel_text_1"],
    },
    {
      src: polishImage,
      alt: "Polish",
      text: content[language]["carousel_text_2"],
    },
  
    {
      src: vulcatizationImage,
      alt: "Vulcanization",
      text: content[language]["carousel_text_3"],
    },
  ];
  
  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
      position="relative"
      bg="gray.100"
      borderRadius="lg"
      overflow="hidden"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        textAlign={{ base: "center", md: "left" }}
      >
        <Box position="relative" width={{ base: "100%", md: "auto" }}>
          <Button
            position="absolute"
            left="10px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="1"
            onClick={prevSlide}
            bg="white"
            color="grey.800"
            _hover={{ bg: "grey.200" }}
          >
            <ChevronLeftIcon />
          </Button>
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={{ base: "600px", md: "800px" }}
            height={{ base: "600px", md: "800px" }}
            objectFit="cover"
          />
          <Text
            position="absolute"
            top="10px"
            left="50%"
            transform="translateX(-50%)"
            color="white"
            fontSize="xl"
            fontWeight="bold"
            zIndex="2"
            bg="rgba(0, 0, 0, 0.5)"
            px="2"
            py="1"
            borderRadius="md"
          >
            {images[currentIndex].text}
          </Text>

          <Button
            position="absolute"
            right="10px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="1"
            onClick={nextSlide}
            bg="white"
            color="grey.800"
            _hover={{ bg: "grey.200" }}
          >
            <ChevronRightIcon />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ServiceList;
