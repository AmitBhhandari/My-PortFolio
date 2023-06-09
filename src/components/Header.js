import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: amitbhandari68@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/AmitBhhandari?tab=repositories",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/amit-bhandari-b96110233/",
  }
];

const Header = () => {
  const headerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState();

  useEffect(() => {
    let lastPositionY = window.pageYOffset;

    const handleScroll = () => {
      const currentPositionY = window.pageYOffset;
      const newScrollDirection = currentPositionY < lastPositionY ? 'up' : 'down';

      if (newScrollDirection !== scrollDirection) {
        setScrollDirection(newScrollDirection);
      }

      lastPositionY = currentPositionY;
      headerRef.current.style.transform = `translateY(${scrollDirection === 'down' ? -200 : 0}px)`
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollDirection]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={999}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Process only if we have social links */}
            {Object.keys(socials).length > 0 && (
              <HStack spacing={8}>
                {
                  socials.map(({ icon, url }) => (
                    <a href={url} key={url} target="_blank">
                      <FontAwesomeIcon icon={icon} size="2x" />
                    </a>
                  ))
                }
              </HStack>
            )}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href={`/#contact-me`} onClick={handleClick('contact-me')}>Contact Me</a>
              <a href={`/#projects`} onClick={handleClick('projects')}>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
