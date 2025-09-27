import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import HeroSection from "../../components/heroSection";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import pagesConfig from "../../data/pagesConfig.json";

const HeroContent = () => {
  const typingTextRef = useRef(null);
  const cursorRef = useRef(null);
  const config = pagesConfig.default;

  useEffect(() => {
    const typingText = typingTextRef.current;
    const cursor = cursorRef.current;

    if (!typingText || !cursor) return;

    const words = config.hero.typingWords;
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = config.hero.typingSpeed;

    const type = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        typingText.textContent = currentWord.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = config.hero.deletingSpeed;
      } else {
        typingText.textContent = currentWord.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = config.hero.typingSpeed;
      }

      if (!isDeleting && currentCharIndex === currentWord.length) {
        typingSpeed = config.hero.pauseSpeed;
        isDeleting = true;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        typingSpeed = config.hero.wordPauseSpeed;
      }

      setTimeout(type, typingSpeed);
    };

    type();

    gsap.to(cursor, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });

    return () => {};
  }, [config]);

  return (
    <VStack align="flex-start" spacing={4} justify="center" h="full">
      <Text
        mb={0}
        fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
        fontWeight="bold"
        letterSpacing="0.1rem"
        lineHeight="1"
        className="poppins"
        color={useColorModeValue("#757575", "#A0A0A0")}
        textTransform="uppercase"
        opacity={0.9}
      >
        {config.hero.name}
      </Text>
      <Text
        fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
        fontWeight="bold"
        letterSpacing="tight"
        lineHeight="1"
        className="poppins"
        color={useColorModeValue("#4f4f4f", "#F7F8FA")}
        textTransform="uppercase"
        display="flex"
        alignItems="center"
        wordBreak="break-word"
      >
        <span ref={typingTextRef}></span>
        <span
          ref={cursorRef}
          style={{
            display: "inline-block",
            width: "8px",
            height: "1em",
            backgroundColor: useColorModeValue("#4f4f4f", "#F7F8FA"),
            marginLeft: "4px",
          }}
        ></span>
      </Text>
    </VStack>
  );
};

const HeroWithContent = HeroSection(HeroContent);

const Default = () => {
  const config = pagesConfig.default;
  return (
    <HeroWithContent
      footerHead={config.footer.head}
      footerBody={config.footer.body}
      footerSub={config.footer.sub}
      navigateTo={config.footer.navigateTo}
    />
  );
};

export default Default;
