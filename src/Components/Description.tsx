import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import informationImage from "../poze/information2.jpeg";
import  theme  from "../Design/theme.js";
import content_en from "../Content/content_en.json";
import content_de from "../Content/content_de.json";
import content_ro from "../Content/content_ro.json";
import content_ru from "../Content/content_ru.json";
import content_po from "../Content/content_po.json";
import { useLanguage } from './LanguageContext.tsx';

const Description = () => {
  const bgColor = useColorModeValue(theme.colors.gray[50], theme.colors.gray[800]);
  const textColor = useColorModeValue("gray.700", "gray.200");
  const content = {
    en: content_en,
    de: content_de,
    ro: content_ro,
    ru: content_ru,
    po: content_po,
  };
  const { language } = useLanguage();

  return (
    <Container maxW={"7xl"} p="8">
      <Heading as="h1" fontSize="3xl" mb="4">{content[language]["heading_services"]}</Heading>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        gap="6"
      >
        <Box
          flex="1"
          position="relative"
          alignItems="center"
        >
          <Image
            borderRadius="lg"
            src={informationImage}
            alt="LA Garage Services"
            objectFit="cover"
            width="100%"
            height="auto"
          />
        </Box>
        <Box
          flex="1"
          bg={bgColor}
          p={4}
          borderRadius={"md"}
          boxShadow="md"
        >
          <Heading as="h2" fontSize="2xl" mb="2">
          {content[language]["linkText_services"]}
          </Heading>
          <Text
            as="p"
            color={textColor}
            fontSize="lg"
          >
            
            {content[language]["textContent_services"]}
            </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Description;
