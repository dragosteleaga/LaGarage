import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

const StickyButton = ({ content, language }) => {
  const [isSticky, setSticky] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    setSticky(window.scrollY >= 0);
  };

  // Add and remove the event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="tel:+491624238281"
      style={{
        position: isSticky ? "fixed" : "relative",
        bottom: "20px",
        right: "20px",
        zIndex: 999,
      }}
    >
      <Button
  variant="solid"
  bg="green.500" // Green background
  color="white" // White text
  _hover={{
    bg: "green.600", // Slightly darker green on hover
  }}
  size="lg" // Larger button size
  borderRadius="full" // Makes the button round
  p={8} // Padding for a larger clickable area
  mr={4}
  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.3)" // Optional shadow for depth
>
  {content[language]["nav_text_5"]}
</Button>

    </a>
  );
};

export default StickyButton;
