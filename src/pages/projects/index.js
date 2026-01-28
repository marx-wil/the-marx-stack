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
  FaStethoscope,
  FaGraduationCap,
} from "react-icons/fa";
import HeroSection from "../../components/heroSection";
import TextWithImage from "../../components/TextWithImage";
import DentalManagementSystem from "../../assets/projects/dems.jpg";
import HeroHeader from "../../components/HeroHeader";
import GSAPModal from "../../components/gsapModal";
import SEO from "../../components/SEO";
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
        "These systems are designed around reliability, workflow integrity, and predictable behavior under load.",
    },
    {
      content:
        "Each system emphasizes data architecture, queue-based processing systems, and clear component boundaries.",
      display: { base: "none", xl: "block" },
    },
    {
      content:
        "The focus is on operational readiness, failure recovery, and systems that remain debuggable as they scale.",
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
        "A veterinary management platform designed around operational workflows, data integrity, and predictable access to clinical records.",
      tech: ["React", "TypeScript", "Vite", "PostgreSQL", "Node.js", "Docker", "AWS RDS"],
      features: [
        "Client portal aligned to clinic workflows and data ownership",
        "Admin console for operational workflows and record access",
        "Data architecture with schema management and migration control",
        "Queue-based processing system for scheduled care workflows",
        "Location services integration for routing and service coverage",
        "QR-based record access with controlled visibility",
      ],
      challenges: [
        "Protecting sensitive records with role-based access control",
        "Consistency for multi-actor updates across workflows",
        "Idempotent updates for retries and partial failures",
        "Availability of records during peak operational hours",
        "Controlled data sharing between owners and clinics",
      ],
      impact:
        "Improved operational consistency for clinic workflows and reduced manual reconciliation of records.",
    },
    {
      id: "vetscribe",
      icon: FaStethoscope,
      title: "Vetscribe",
      subtitle: "Veterinary Clinic Dashboard",
      status: "Completed",
      color: "green",
      image: "",
      description:
        "A clinic operations platform with structured documentation workflows, secure access control, and event-driven communication systems.",
      tech: ["React", "Python", "FastAPI", "PostgreSQL", "Docker", "AWS Cognito", "AWS SES", "AWS SNS"],
      features: [
        "Structured SOAP documentation workflow with auditability",
        "Authentication boundary via AWS Cognito",
        "Event-driven communication system via SNS and SES",
        "Containerized service separation for web and API",
        "Queue-based processing system for asynchronous workflows",
        "Patient status transitions with controlled state changes",
      ],
      challenges: [
        "Multi-service coordination and failure isolation",
        "Identity integration with external auth provider",
        "Event delivery reliability and retries",
        "Consistent patient state transitions under load",
        "Secure API boundaries and rate control",
      ],
      impact:
        "Reduced documentation overhead and improved traceability of patient workflows.",
    },
    {
      id: "cerevium",
      icon: FaGraduationCap,
      title: "Cerevium",
      subtitle: "Practice Examination Platform",
      status: "Completed",
      color: "purple",
      image: "",
      description:
        "A practice examination platform built around document ingestion, processing pipelines, and AI-driven content generation.",
      tech: ["Next.js", "React", "Python", "Streamlit", "Google Generative AI", "PostgreSQL", "Firebase", "Google Cloud Storage"],
      features: [
        "Document ingestion and parsing pipeline for PDFs",
        "Queue-based processing system for extraction and generation",
        "Model orchestration with prompt versioning",
        "Storage architecture for source documents and outputs",
        "Analytics pipeline for usage and outcome tracking",
        "Secure access control and user management",
      ],
      challenges: [
        "PDF parsing variability and extraction errors",
        "Latency control for generation workflows",
        "Consistency between generated items and source material",
        "Multi-service authentication and storage integration",
        "Cost control for compute and storage use",
      ],
      impact:
        "Reduced time to create practice sets and improved repeatability of content workflows.",
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
            Infrastructure Components:
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
            Architectural Components:
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
              Failure Cases & Constraints:
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
              Operational Outcomes:
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
          <HeroHeader title="Systems" subtitle="Port" highlightText="folio" />
        </GridItem>

        <GridItem alignSelf="center" position="relative">
          <TextWithImage
            textContent={textContent}
            imageSrc={DentalManagementSystem}
            footerTag="Systems Portfolio"
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
          Systems Overview
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
    <>
      <SEO
        title="Systems Portfolio - Wilmarx | Backend Architecture & Reliability"
        description="Systems portfolio featuring platforms designed for reliability, data architecture, and queue-based processing systems, including Pawnec, Vetscribe, and Cerevium."
        url="https://the-marx-stack.vercel.app/projects"
        keywords="systems portfolio, backend architecture, reliability engineering, system design, queue-based processing, data architecture, Pawnec, Vetscribe, Cerevium"
      />
      <HeroWithContent
        footerHead="System"
        footerBody="Leadership"
        footerSub="Click to view"
        navigateTo="/work-history"
      />
    </>
  );
};

export default Projects;
