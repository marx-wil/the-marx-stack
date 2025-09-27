import {
  VStack,
  Grid,
  GridItem,
  useColorModeValue,
  Box,
  Text,
  Flex,
  Icon,
  Button,
  useDisclosure,
  Image,
  Badge,
  HStack,
} from "@chakra-ui/react";
import {
  FaCode,
  FaRocket,
  FaLaptop,
  FaMobile,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import HeroSection from "../../components/heroSection";
import TextWithImage from "../../components/TextWithImage";
import DentalManagementSystem from "../../assets/projects/dems.jpg";
import HeroHeader from "../../components/HeroHeader";
import GSAPModal from "../../components/gsapModal";
import { useState } from "react";
import pagesConfig from "../../data/pagesConfig.json";

const ProjectsContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeModal, setActiveModal] = useState(null);
  const config = pagesConfig.projects;

  const textColor = useColorModeValue("gray.600", "gray.400");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const projectTextColor = useColorModeValue("gray.800", "gray.200");

  const textContent = config.textContent;

  // Icon mapping for dynamic icon loading
  const iconMap = {
    FaCode,
    FaRocket,
    FaLaptop,
    FaMobile,
    FaDatabase,
    FaCloud,
  };

  const projectWidgets = config.projectWidgets.map(project => ({
    ...project,
    icon: iconMap[project.icon],
    image: project.image === "../../assets/projects/dems.jpg" ? DentalManagementSystem : project.image
  }));

  const handleWidgetClick = (widgetId) => {
    setActiveModal(widgetId);
    onOpen();
  };

  const getModalContent = () => {
    const project = projectWidgets.find((p) => p.id === activeModal);
    if (!project) return null;

    return (
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Box
            w="80px"
            h="80px"
            borderRadius="full"
            bg={`${project.color}.100`}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={4}
          >
            <Icon
              as={project.icon}
              boxSize={10}
              color={`${project.color}.600`}
            />
          </Box>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color={projectTextColor}
            mb={2}
          >
            {project.title}
          </Text>
          <Text
            fontSize="lg"
            color={`${project.color}.600`}
            fontWeight="medium"
            mb={2}
          >
            {project.subtitle}
          </Text>
          <Badge
            colorScheme={
              project.status === "Completed"
                ? "green"
                : project.status === "In Progress"
                ? "blue"
                : "orange"
            }
            variant="subtle"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="sm"
          >
            {project.status}
          </Badge>
        </Box>

        <Box borderRadius="xl" overflow="hidden" boxShadow="lg">
          <Image
            src={project.image}
            alt={project.title}
            w="full"
            h="auto"
            objectFit="cover"
          />
        </Box>

        <Text
          color={textColor}
          lineHeight="tall"
          className="poppins-light"
          fontSize="md"
        >
          {project.description}
        </Text>

        <Box>
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color={projectTextColor}
            mb={3}
          >
            Technology Stack:
          </Text>
          <Flex wrap="wrap" gap={2}>
            {project.tech.map((tech, index) => (
              <Badge
                key={index}
                colorScheme={project.color}
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
              >
                {tech}
              </Badge>
            ))}
          </Flex>
        </Box>

        <Box>
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color={projectTextColor}
            mb={3}
          >
            Key Features:
          </Text>
          <VStack spacing={2} align="stretch">
            {project.features.map((feature, index) => (
              <Flex key={index} align="center" gap={3}>
                <Box
                  w="2"
                  h="2"
                  borderRadius="full"
                  bg={`${project.color}.500`}
                  flexShrink={0}
                />
                <Text color={textColor} className="poppins-light" fontSize="sm">
                  {feature}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>

        <Grid templateColumns="1fr 1fr" gap={6}>
          <Box>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color={projectTextColor}
              mb={3}
            >
              Challenges:
            </Text>
            <VStack spacing={2} align="stretch">
              {project.challenges.map((challenge, index) => (
                <Flex key={index} align="center" gap={3}>
                  <Box
                    w="2"
                    h="2"
                    borderRadius="full"
                    bg="orange.500"
                    flexShrink={0}
                  />
                  <Text
                    color={textColor}
                    className="poppins-light"
                    fontSize="sm"
                  >
                    {challenge}
                  </Text>
                </Flex>
              ))}
            </VStack>
          </Box>

          <Box>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color={projectTextColor}
              mb={3}
            >
              Impact:
            </Text>
            <Text
              color={textColor}
              className="poppins-light"
              fontSize="sm"
              lineHeight="tall"
            >
              {project.impact}
            </Text>
          </Box>
        </Grid>
      </VStack>
    );
  };

  return (
    <VStack
      align="stretch"
      spacing={{ base: 6, md: 10 }}
      maxW="6xl"
      w="full"
      px={{ base: 4, md: 0 }}
      position="relative"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: 8, md: 16 }}
        w="full"
        alignItems="center"
      >
        <GridItem>
          <HeroHeader 
            title={config.hero.title} 
            subtitle={config.hero.subtitle} 
            highlightText={config.hero.highlightText} 
          />
        </GridItem>

        <GridItem alignSelf="center" position="relative">
          <TextWithImage
            textContent={textContent}
            imageSrc={DentalManagementSystem}
            footerTag={config.image.footerTag}
          />
        </GridItem>
      </Grid>

      <Box mt={{ base: 8, md: 12 }}>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="semibold"
          color={textColor}
          mb={8}
          className="poppins"
          textAlign="center"
        >
          {config.sectionTitle}
        </Text>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 6, md: 8 }}
          w="full"
        >
          {projectWidgets.map((project) => (
            <GridItem key={project.id}>
              <Box
                bg={cardBg}
                p={6}
                borderRadius="2xl"
                boxShadow="lg"
                border="1px solid"
                borderColor={cardBorderColor}
                cursor="pointer"
                _hover={{
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "2xl",
                  borderColor: `${project.color}.400`,
                  _before: {
                    transform: "scaleX(1)",
                  },
                }}
                transition="all 0.4s ease"
                position="relative"
                overflow="hidden"
                onClick={() => handleWidgetClick(project.id)}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  bg: `linear-gradient(90deg, ${project.color}.400, ${project.color}.600)`,
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.4s ease",
                }}
              >
                <VStack spacing={4} align="center" textAlign="center">
                  <Box
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg={`${project.color}.100`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s ease"
                  >
                    <Icon
                      as={project.icon}
                      boxSize={8}
                      color={`${project.color}.600`}
                      transition="all 0.3s ease"
                    />
                  </Box>

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color={projectTextColor}
                    className="poppins"
                  >
                    {project.title}
                  </Text>

                  <Text
                    fontSize="sm"
                    color={`${project.color}.600`}
                    fontWeight="medium"
                    className="poppins"
                  >
                    {project.subtitle}
                  </Text>

                  <HStack spacing={2}>
                    <Badge
                      colorScheme={
                        project.status === "Completed"
                          ? "green"
                          : project.status === "In Progress"
                          ? "blue"
                          : "orange"
                      }
                      variant="subtle"
                      px={2}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                    >
                      {project.status}
                    </Badge>
                  </HStack>

                  <Button
                    size="sm"
                    variant="outline"
                    colorScheme={project.color}
                    borderRadius="full"
                    _hover={{
                      transform: "scale(1.05)",
                      boxShadow: "md",
                    }}
                    transition="all 0.2s ease"
                  >
                    View Details
                  </Button>
                </VStack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      <GSAPModal
        isOpen={isOpen}
        onClose={onClose}
        title={
          activeModal
            ? projectWidgets.find((p) => p.id === activeModal)?.title
            : ""
        }
        size="md"
      >
        {getModalContent()}
      </GSAPModal>
    </VStack>
  );
};

const HeroWithContent = HeroSection(ProjectsContent);

const Projects = () => {
  const config = pagesConfig.projects;
  return (
    <HeroWithContent
      footerHead={config.footer.head}
      footerBody={config.footer.body}
      footerSub={config.footer.sub}
      navigateTo={config.footer.navigateTo}
    />
  );
};

export default Projects;
