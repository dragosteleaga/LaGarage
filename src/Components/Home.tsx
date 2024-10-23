import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import coverImage from "../poze/cover1.jpeg";
import { useLanguage } from './LanguageContext.tsx';
import content_en from "../Content/content_en.json";
import content_de from "../Content/content_de.json";
import content_ro from "../Content/content_ro.json";
import content_ru from "../Content/content_ru.json";
import content_po from "../Content/content_po.json";
export default function Home2() {
  const { language, changeLanguage } = useLanguage();
  const content = {
    en: content_en,
    de: content_de,
    ro: content_ro,
    ru: content_ru,
    po: content_po,
  };
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={`url(${coverImage})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"3xl"} align={"flex-start"} spacing={6}>
          <Box
            bg={"rgba(0, 0, 0, 0.2)"} 
            px={4} 
            py={2} 
            borderRadius={"md"}
          >
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              {content[language]["home_title"]}
            </Text>
            <Box px={2} py={5}>
              <a href="tel:+491624238281">
                <Button
                  bg={"blue.400"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                >
                  {content[language]["home_button"]}
                </Button>
              </a>
            </Box>
          </Box>
        </Stack>
      </VStack>
    </Flex>
  );
}