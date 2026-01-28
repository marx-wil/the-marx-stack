import {
  Text,
  useColorModeValue,
  VStack,
  Box,
  Image,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const TextWithImage = ({
  textContent,
  imageSrc,
  footerTag,
  maxWidth = "5xl",
  spacing = { base: 4, md: 8 },
  padding = { base: 4, md: 0 },
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const textSize = useBreakpointValue({ base: "sm", md: "md" });
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  const textColor = useColorModeValue("gray.700", "gray.300");
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const previewBorderColor = useColorModeValue("gray.200", "gray.600");
  const footerLineColor = useColorModeValue("gray.300", "gray.600");
  const footerTextColor = useColorModeValue("gray.600", "gray.400");

  const handleToggleImage = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    if (!overlayRef.current || !modalRef.current) {
      setIsPopupOpen(false);
      return;
    }
    gsap.to(overlayRef.current, {
      backgroundColor: "rgba(0,0,0,0)",
      duration: 0.2,
      ease: "power2.inOut",
    });
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.96,
      y: 10,
      duration: 0.2,
      ease: "power2.inOut",
      onComplete: () => setIsPopupOpen(false),
    });
  };

  useEffect(() => {
    if (!isPopupOpen || !overlayRef.current || !modalRef.current) return;
    gsap.set(modalRef.current, { opacity: 0, scale: 0.96, y: 10 });
    gsap.fromTo(
      overlayRef.current,
      { backgroundColor: "rgba(0,0,0,0)" },
      {
        backgroundColor: "rgba(0,0,0,0.6)",
        duration: 0.2,
        ease: "power2.inOut",
      }
    );
    gsap.to(modalRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  }, [isPopupOpen]);

  return (
    <VStack
      align="stretch"
      spacing={spacing}
      maxW={maxWidth}
      w="full"
      px={padding}
      position="relative"
    >
      <Box
        position="relative"
        width="100%"
        minHeight={{ base: "360px", md: "540px" }}
        height="auto"
        overflow="hidden"
      >
        <Box
          position="relative"
          width="100%"
          height="auto"
          zIndex={1}
        >
          <Box
            bg={bgColor}
            p={{ base: 4, md: 6 }}
            borderRadius="xl"
            boxShadow="lg"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              borderRadius: "xl",
              border: "1px solid",
              borderColor: borderColor,
              opacity: 0.5,
            }}
          >
            <VStack spacing={3} align="stretch">
              {textContent.map((text, index) => (
                <Text
                  key={index}
                  className="poppins-light"
                  fontSize={textSize}
                  color={textColor}
                  display={text.display || "block"}
                  lineHeight="tall"
                >
                  {text.content}
                </Text>
              ))}

              <Box
                position="relative"
                mt={2}
                height="60px"
                borderRadius="md"
                overflow="hidden"
                border="1px solid"
                borderColor={previewBorderColor}
                cursor="pointer"
                onClick={handleToggleImage}
              >
                <Image
                  src={imageSrc}
                  alt="Preview"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  objectPosition="center"
                />
                <Flex
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg="rgba(0,0,0,0.3)"
                  alignItems="center"
                  justifyContent="center"
                  opacity={0.7}
                  _hover={{ opacity: 1 }}
                  transition="opacity 0.2s"
                >
                  <Text
                    color="white"
                    fontWeight="medium"
                    fontSize="sm"
                    display="flex"
                    alignItems="center"
                  >
                    Click to see photo
                    <Box
                      as="span"
                      ml={1}
                      transform="translateY(-2px)"
                      fontSize="lg"
                    >
                      ↑
                    </Box>
                  </Text>
                </Flex>
              </Box>
            </VStack>
          </Box>
        </Box>

        {isPopupOpen && (
          <Box
            position="fixed"
            inset={0}
            bg="rgba(0,0,0,0)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex={1000}
            onClick={handleClosePopup}
            ref={overlayRef}
          >
            <Box
              position="relative"
              maxW={{ base: "92%", md: "80%" }}
              maxH={{ base: "90%", md: "85%" }}
              bg="black"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="2xl"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <Image
                src={imageSrc}
                alt="Photo"
                width="100%"
                height="100%"
                objectFit="contain"
                objectPosition="center"
              />
              <Flex
                position="absolute"
                top={3}
                right={3}
                bg="rgba(0,0,0,0.7)"
                color="white"
                px={3}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="semibold"
                cursor="pointer"
                onClick={handleClosePopup}
              >
                <Text>Close</Text>
              </Flex>
            </Box>
          </Box>
        )}
      </Box>

      {footerTag && (
        <Flex justify="flex-end" mt={2}>
          <Box
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: "50%",
              right: "100%",
              width: "30px",
              height: "1px",
              bg: footerLineColor,
              marginRight: "10px",
            }}
          >
            <Text
              fontSize="xs"
              letterSpacing="0.2em"
              textTransform="uppercase"
              color={footerTextColor}
              className="poppins-light"
            >
              {footerTag}
            </Text>
          </Box>
        </Flex>
      )}
    </VStack>
  );
};

export default TextWithImage;
