import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Amit!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const avatarUrl = 'https://lh3.googleusercontent.com/pw/AMWts8AXHFmzfQ8QSCLYb82NRmZou4fO43VuF7L5OdAl4KyBIgqQ39Yb2Iks4rd4pjNzd2PwJe0u4FuY5jJUeBJY9SXGfiNBziz-aJAE3AXlRKZYYyHoqrSdvxho6-kzTQ4QkSBj3KNG_rNwi4XltoWLmA_OeQ=w1080-h809-s-no?authuser=0';

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={8} align="center">
      <Avatar name={greeting} src={avatarUrl} size="2xl" />
      <Heading as='h5' size="sm">{greeting}</Heading>
      <Heading as='h1' size="2xl">{bio1}</Heading>
      <Heading as='h1' size="2xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
