import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <VStack
      align="stretch"
      bg="white"
      borderRadius={8}
      color="black"
      cursor="pointer"
    >
      <Image src={imageSrc} borderRadius={8} />
      {title && (
        <HStack p={4} paddingBottom={0} paddingTop={2}>
          <Heading size="md">{title}</Heading>
        </HStack>
      )}
      {description && (
        <HStack p={4} paddingBottom={0} paddingTop={2}>
          <Text fontSize="sm" color="grey">
            {description}
          </Text>
        </HStack>
      )}
      <HStack p={4} paddingTop={2}>
        <Link to={link} fontSize="sm">
          See more <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </HStack>
    </VStack>
  );
};

export default Card;
