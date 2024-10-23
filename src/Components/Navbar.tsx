import { ReactNode } from "react";
import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import logo from "../poze/logo.jpeg";
import LanguageSelect from "./LanguageSelect.tsx";
import content_en from "../Content/content_en.json";
import content_de from "../Content/content_de.json";
import content_ro from "../Content/content_ro.json";
import content_ru from "../Content/content_ru.json";
import content_po from "../Content/content_po.json";
import { useLanguage } from "./LanguageContext.tsx";

const backgroundColor = "rgba(13, 17, 23, 0.95)"; // Deep blue background

const NavLink = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  const { language } = useLanguage();
  const content = {
    en: content_en,
    de: content_de,
    ro: content_ro,
    ru: content_ru,
    po: content_po,
  };

  // Get the link text based on the selected language
  const linkText = content[language][`nav_text_${children}`];

  return (
    <ScrollLink
      to={linkText?.toString().toLowerCase().replace(/\s+/g, "-")}
      smooth={true}
      duration={500}
      spy={true}
      exact="true"
      offset={-70}
    >
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: "rgba(13, 17, 23, 0.8)",
        }}
        onClick={onClose}
      >
        {linkText}
      </Link>
    </ScrollLink>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { changeLanguage } = useLanguage();

  // Links based on selected language
  const Links = [1, 2, 3]; // Assuming nav_text_1, nav_text_2, nav_text_3 are indexed numerically.

  return (
    <>
      <Box
        bg={backgroundColor}
        color="white"
        px={4}
        boxShadow="md"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={999}
        width="100%"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Toggle Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box w={50} h={50}>
              <img src={logo} alt="Logo" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link} onClose={onClose}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <LanguageSelect changeLanguage={changeLanguage} />
          </Flex>
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} onClose={onClose}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
}
