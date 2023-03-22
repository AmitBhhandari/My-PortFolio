import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Built an e-commerce app using React, enabling customers to shop easily with a smooth browsing experience, add products to cart, and checkout securely. The component-based architecture of React allowed for efficient code management and reusable UI elements.",
    imageSrc: require("../images/photo1.jpg"),
    link: "https://e-commerce-896c9.web.app",
  },
  {
    title: "Expense Tracker Website",
    description:
      "Created a simple platform using React to keep the track of expenses done by a user . Integrated email verification and password reset functionalities using firebase APIs. Implemented a simple dark mode theme for premium users. Added downloading feature which allows premium users to download their expenses.",
    imageSrc: require("../images/photo2.jpg"),
    link: "https://expensetracker-7c397.web.app",
  },
  {
    title: "Mail Box Client",
    description:
      "A dummy mail box where user can send and receive text-mails. React app where users can interact via sending and receiving live mail. Build custom hook for sending and requesting data. Used redux for managing text-mails and authentication. Used react bootstrap for designing.",
    imageSrc: require("../images/photo3.jpg"),
    link: "https://mail-box-client-a72de.web.app",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
