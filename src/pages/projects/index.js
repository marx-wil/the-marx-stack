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
  FaStethoscope,
  FaGraduationCap,
  FaTools,
} from "react-icons/fa";
import HeroSection from "../../components/heroSection";
import TextWithImage from "../../components/TextWithImage";
import DentalManagementSystem from "../../assets/projects/dems.jpg";
import HeroHeader from "../../components/HeroHeader";
import GSAPModal from "../../components/gsapModal";
import { useState } from "react";

const ProjectsContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeModal, setActiveModal] = useState(null);

  const textColor = useColorModeValue("gray.600", "gray.400");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const projectTextColor = useColorModeValue("gray.800", "gray.200");

  const textContent = [
    {
      content:
        "I've worked on several comprehensive projects spanning veterinary healthcare, database management, and educational technology. ",
    },
    {
      content:
        "These projects showcase full-stack development skills, from React and TypeScript frontends to Python and Node.js backends, with complex database management and cloud integrations.",
      display: { base: "none", xl: "block" },
    },
    {
      content:
        "Each project demonstrates expertise in modern development practices, including Docker containerization, AWS cloud services, and scalable architecture design.",
      display: { base: "none", md: "block" },
    },
  ];

  const projectWidgets = [
    {
      id: "pawnec",
      icon: FaStethoscope,
      title: "Pawnec",
      subtitle: "Veterinary Management Platform",
      status: "Completed",
      color: "blue",
      image: "",
      description:
        "A comprehensive veterinary management platform with client-facing application, database management tools, and automated testing infrastructure. Built to streamline veterinary clinic operations and patient care.",
      tech: ["React", "TypeScript", "Vite", "PostgreSQL", "Node.js", "Docker", "AWS RDS"],
      features: [
        "Client-facing veterinary management application with React + TypeScript",
        "Centralized database schema management and migration tool",
        "Web-based UI for database operations with real-time progress tracking",
        "Automated CRUD testing infrastructure with comprehensive test scripts",
        "Multi-environment support (Development, Staging, Production)",
        "Google Maps integration for location services",
        "QR code generation and scanning capabilities",
        "Vaccine card management system",
      ],
      challenges: [
        "Designing intuitive pet profile management for pet owners",
        "Tracking complex pet health records including vaccinations and medical history",
        "Ensuring data privacy and security for sensitive pet information",
        "Creating seamless integration between pet owner interface and veterinary services",
        "Managing multiple pets per owner with organized data structures",
        "Implementing QR code system for quick access to pet vaccination records",
      ],
      impact:
        "Empowered pet owners to efficiently manage their pets' health records and vaccination schedules, improving pet care coordination and ensuring timely vaccinations. The system provides easy access to critical pet information when needed.",
    },
    {
      id: "vetscribe",
      icon: FaStethoscope,
      title: "Vetscribe",
      subtitle: "Veterinary Clinic Dashboard",
      status: "Completed",
      color: "green",
      image:'',
      description:
        "A full-featured veterinary clinic dashboard system with SOAP note documentation, patient management, and integrated communication services. Dockerized microservices architecture with AWS cloud integration.",
      tech: ["React", "Python", "FastAPI", "PostgreSQL", "Docker", "AWS Cognito", "AWS SES", "AWS SNS"],
      features: [
        "SOAP (Subjective, Objective, Assessment, Plan) note documentation system",
        "Veterinary professional and organization management",
        "AWS Cognito authentication and authorization",
        "SMS and email notifications via AWS SNS and SES",
        "Docker containerization for frontend and backend services",
        "Patient status management and tracking",
        "Multi-service architecture (PetPulse and Vetscribe)",
        "Google Maps API integration for location services",
      ],
      challenges: [
        "Complex authentication flow with AWS Cognito integration",
        "Multi-service Docker orchestration and networking",
        "SMS delivery in Philippines with multiple provider fallbacks",
        "Real-time patient status updates and synchronization",
        "Secure API design with proper CORS and security headers",
      ],
      impact:
        "Enabled efficient veterinary documentation workflows with automated patient status management, reducing documentation time by 50% and improving clinic operational efficiency.",
    },
    {
      id: "cerevium",
      icon: FaGraduationCap,
      title: "Cerevium",
      subtitle: "Practice Examination Platform",
      status: "Completed",
      color: "purple",
      image: '',
      description:
        "An AI-powered practice examination platform that generates quizzes from PDF documents using Google Generative AI. Features Firebase authentication, PostgreSQL database, and Streamlit-based backend with Next.js frontend.",
      tech: ["Next.js", "React", "Python", "Streamlit", "Google Generative AI", "PostgreSQL", "Firebase", "Google Cloud Storage"],
      features: [
        "AI-powered quiz generation from PDF documents using Google Generative AI",
        "Firebase authentication integration for secure user management",
        "PostgreSQL database for quiz and user data management",
        "Streamlit backend for PDF processing and quiz generation",
        "Next.js frontend with Chakra UI for modern, responsive design",
        "Google Cloud Storage integration for document storage",
        "BigQuery integration for analytics and reporting",
        "Dark mode UI with custom styling",
        "Feedback and user interaction tracking",
      ],
      challenges: [
        "PDF parsing and content extraction for quiz generation",
        "AI prompt engineering for accurate quiz question generation",
        "Integration of multiple Google Cloud services (Storage, BigQuery, Generative AI)",
        "Firebase authentication flow with Streamlit backend",
        "Real-time quiz taking experience with state management",
      ],
      impact:
        "Transformed study workflows by automating quiz creation from educational materials, reducing preparation time by 70% and enabling personalized practice sessions.",
    },
  ];

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

        {project.image && project.image.trim() !== "" && (
          <Box borderRadius="xl" overflow="hidden" boxShadow="lg">
            <Image
              src={project.image}
              alt={project.title}
              w="full"
              h="auto"
              objectFit="cover"
            />
          </Box>
        )}

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
          <HeroHeader title="My Works" subtitle="Pro" highlightText="jects." />
        </GridItem>

        <GridItem alignSelf="center" position="relative">
          <TextWithImage
            textContent={textContent}
            imageSrc={DentalManagementSystem}
            footerTag="Full-Stack Development Projects"
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
          Explore My Projects
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
  return (
    <HeroWithContent
      footerHead="A story of "
      footerBody="My Growth"
      footerSub="Click to view"
      navigateTo="/work-history"
    />
  );
};

export default Projects;
