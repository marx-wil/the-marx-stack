

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
} from "@chakra-ui/react";
import {
  FaCode,
  FaServer,
  FaCloud,
  FaUser,
  FaRocket,
  FaLightbulb,
  FaChartLine,
  FaTools,
  FaPalette,
} from "react-icons/fa";
import HeroSection from "../../components/heroSection";
import TextWithImage from "../../components/TextWithImage";
import dev_avatar from "../../assets/me/wilmarx.jpg";
import HeroHeader from "../../components/HeroHeader";
import GSAPModal from "../../components/gsapModal";
import SEO from "../../components/SEO";
import { useState } from "react";

const AboutContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeModal, setActiveModal] = useState(null);

  const textColor = useColorModeValue("gray.600", "gray.400");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const skillTextColor = useColorModeValue("gray.800", "gray.200");

  const textContent = [
    {
      content:
        "I design backend platforms with a focus on stability, scalability, and fault tolerance. My work centers on predictable behavior under load, resource constraints, and recovery from failure.",
    },
    {
      content:
        "I model systems as interacting components with defined interfaces, data flows, and operational constraints. This keeps architecture observable and maintainable as complexity grows.",
      display: { base: "none", xl: "block" },
    },
    {
      content:
        "As Chief Information Officer at Stappl Inc., I lead platform architecture, reliability posture, and operational readiness across production systems.",
      display: { base: "none", md: "block" },
    },
  ];

  const systemFocusWidgets = [
    {
      id: "system-architecture",
      icon: FaServer,
      title: "System Architecture",
      subtitle: "Decomposition • Interfaces • Boundaries",
      color: "blue",
      description:
        "Design platforms as interacting components with defined contracts, data ownership, and failure boundaries.",
      details: [
        "Architectural decomposition into subsystems and services",
        "Interface design for workflows and data flow ownership",
        "Failure boundaries and fault containment strategies",
        "Load-aware design and capacity planning",
        "Architecture documentation mapped to runtime behavior",
      ],
    },
    {
      id: "reliability-engineering",
      icon: FaLightbulb,
      title: "Reliability Engineering",
      subtitle: "Failure Modeling • Recovery • Degradation",
      color: "green",
      description:
        "Model how systems degrade, fail, and recover under stress, load, and concurrency.",
      details: [
        "Failure modeling for critical workflows",
        "Graceful degradation and recovery processes",
        "Backpressure handling and rate control",
        "Crash recovery design and restart safety",
        "Operational runbooks and failure response",
      ],
    },
    {
      id: "data-architecture",
      icon: FaChartLine,
      title: "Data Architecture",
      subtitle: "Schema Design • Consistency • Scaling",
      color: "purple",
      description:
        "Design data models that match workflows, constraints, and consistency requirements.",
      details: [
        "Schema design aligned to system workflows",
        "Data integrity and constraint modeling",
        "Indexing strategy and query performance",
        "Multi-environment migration discipline",
        "Storage lifecycle and retention planning",
      ],
    },
    {
      id: "queue-systems",
      icon: FaTools,
      title: "Queue-Based Processing Systems",
      subtitle: "Workflows • Retries • Backpressure",
      color: "orange",
      description:
        "Build queue-based processing systems for durable, observable, and recoverable workflows.",
      details: [
        "Queue-worker architectures with retry strategy",
        "Idempotent processing and failure recovery",
        "Workload partitioning and prioritization",
        "Schedule-driven and event-driven workflows",
        "Job telemetry and queue visibility",
      ],
    },
    {
      id: "observability",
      icon: FaPalette,
      title: "Observability & Diagnostics",
      subtitle: "Metrics • Tracing • Alerting",
      color: "teal",
      description:
        "Design observability pipelines that expose runtime behavior and failure signals.",
      details: [
        "Structured logging aligned to workflows",
        "Metrics for capacity, latency, and error rates",
        "Tracing for cross-service latency analysis",
        "Alerting tied to service-level thresholds",
        "Incident visibility and root cause analysis",
      ],
    },
    {
      id: "resource-isolation",
      icon: FaCloud,
      title: "Resource Isolation",
      subtitle: "Workload Separation • Capacity Guards",
      color: "cyan",
      description:
        "Protect critical workflows by isolating resources and controlling contention.",
      details: [
        "Worker and web process separation",
        "Concurrency limits and load shedding",
        "Workload separation for heavy processes",
        "Memory and CPU usage guards",
        "Capacity-aware routing and scheduling",
      ],
    },
    {
      id: "infrastructure-components",
      icon: FaCode,
      title: "Infrastructure Components",
      subtitle: "Runtime • Storage • Delivery",
      color: "indigo",
      description:
        "Select infrastructure components based on reliability, observability, and operational constraints.",
      details: [
        "Node.js, NestJS, Express for backend runtime",
        "PostgreSQL and MySQL for data architecture",
        "Redis and BullMQ for queue-based processing",
        "Docker for environment parity and isolation",
        "Heroku, Railway, and S3-compatible storage",
      ],
    },
    {
      id: "engineering-philosophy",
      icon: FaLightbulb,
      title: "Engineering Philosophy",
      subtitle: "Stability • Predictability • Clarity",
      color: "pink",
      description:
        "Design for failure, isolate complexity, and prioritize operational clarity over speed.",
      details: [
        "Design for failure, not perfection",
        "Isolation over coupling",
        "Stability over speed",
        "Observability over assumptions",
        "Scalability over shortcuts",
      ],
    },
    {
      id: "career-direction",
      icon: FaUser,
      title: "Career Direction",
      subtitle: "Platform • Infrastructure • Reliability",
      color: "yellow",
      description:
        "Focused on roles that require system design, reliability engineering, and platform architecture.",
      details: [
        "Platform Engineering",
        "Infrastructure Engineering",
        "Backend Systems Architecture",
        "Reliability Engineering (SRE)",
        "Distributed Systems Engineering",
      ],
    },
  ];

  const expertiseWidgets = [
    {
      id: "frontend",
      icon: FaCode,
      title: "Client Interfaces",
      subtitle: "Next.js • React • TypeScript • Vite",
      color: "blue",
      description:
        "Web interfaces built for operational workflows and data access clarity.",
      details: [
        "Next.js with App Router for structured routing",
        "React with TypeScript for type-safe UI behavior",
        "Vite for efficient local development and builds",
        "Chakra UI and Tailwind CSS for component systems",
        "React Router for navigation control",
        "React Hook Form for structured input handling",
        "Maps and geocoding integrations for location workflows",
        "Error tracking and analytics instrumentation",
      ],
    },
    {
      id: "mobile",
      icon: FaRocket,
      title: "Mobile Clients",
      subtitle: "Expo SDK • React Native",
      color: "cyan",
      description: "Cross-platform clients for field and operational access.",
      details: [
        "Expo SDK with native modules and APIs",
        "React Native with React Navigation",
        "NativeWind for Tailwind-style theming",
        "Expo modules for device integration",
      ],
    },
    {
      id: "backend",
      icon: FaServer,
      title: "Backend Systems",
      subtitle: "Node.js • Python • FastAPI • Express • NestJS",
      color: "green",
      description:
        "Backend services designed for reliability, access control, and predictable processing.",
      details: [
        "Node.js with Express and NestJS for service runtime",
        "Python with FastAPI for high-throughput APIs",
        "JWT-based access control and RBAC patterns",
        "Security headers, input validation, and rate control",
        "File upload pipelines and audit logging",
        "Custom migration workflows for database safety",
      ],
    },
    {
      id: "data-viz",
      icon: FaChartLine,
      title: "Data Visualization & Reporting",
      subtitle: "ApexCharts • Maps • Tables",
      color: "purple",
      description: "Reporting interfaces and map-based analytics views.",
      details: [
        "ApexCharts for operational dashboards",
        "Mapbox GL and Google Maps integrations",
        "TanStack React Table for data grids",
        "Real-time data updates for monitoring",
      ],
    },
    {
      id: "dev-tools",
      icon: FaTools,
      title: "Build & Test Tooling",
      subtitle: "Vite • Jest • ESLint • Prettier",
      color: "orange",
      description: "Tooling for quality control and repeatable builds.",
      details: [
        "Jest and React Testing Library for unit tests",
        "Vitest for fast test execution",
        "ESLint and Prettier for code quality",
        "Babel and PostCSS for build pipelines",
      ],
    },
    {
      id: "ui-components",
      icon: FaPalette,
      title: "UI Libraries & Utilities",
      subtitle: "React Icons • Dropzone • Scrollbars",
      color: "pink",
      description: "Component libraries and utilities used in UI systems.",
      details: [
        "React Icons, MUI Icons, Expo Vector Icons",
        "React Dropzone for file input workflows",
        "React Custom Scrollbars for UI behavior",
        "Refine.dev for admin tooling and devtools",
      ],
    },
    {
      id: "deployment",
      icon: FaCloud,
      title: "Deployment & Security Controls",
      subtitle: "Docker • AWS • Render • Heroku",
      color: "teal",
      description: "Deployment, isolation, and security controls in production.",
      details: [
        "Docker and Docker Compose for service isolation",
        "AWS RDS, S3, Cognito, SES, SNS integrations",
        "Render and Heroku for hosting workflows",
        "Health checks, logging, and monitoring",
      ],
    },
    {
      id: "database-orm",
      icon: FaChartLine,
      title: "Database Architecture",
      subtitle: "PostgreSQL • MySQL • Migrations",
      color: "indigo",
      description: "Data modeling and schema management for system stability.",
      details: [
        "PostgreSQL and MySQL for relational storage",
        "Custom migration systems with hash tracking",
        "Drizzle ORM for type-safe data access",
        "Indexing strategies and query performance",
        "Idempotent migrations for deployment safety",
      ],
    },
    {
      id: "queue-system",
      icon: FaTools,
      title: "Queue-Based Processing",
      subtitle: "BullMQ • Scheduling • Retries",
      color: "yellow",
      description: "Queue-worker systems for workflow orchestration.",
      details: [
        "BullMQ scheduling and execution pipelines",
        "Retry strategy and failure recovery",
        "Workload partitioning and prioritization",
        "Job monitoring and queue visibility",
      ],
    },
    {
      id: "admin-panel",
      icon: FaUser,
      title: "Operations Consoles",
      subtitle: "Refine.dev • Material UI • React",
      color: "purple",
      description: "Admin interfaces for operational workflows and data access.",
      details: [
        "Refine.dev for admin workflows",
        "Material UI for data-heavy interfaces",
        "Role-based access control",
        "Advanced data filtering and search",
      ],
    },
    {
      id: "experience",
      icon: FaUser,
      title: "IT Operations Experience",
      subtitle: "Infrastructure • Security • Support",
      color: "orange",
      description:
        "Operational experience across infrastructure, security, and support systems.",
      details: [
        "IT infrastructure administration and cybersecurity",
        "System monitoring and incident response",
        "Network administration and access control",
        "Operational training and documentation",
      ],
    },
    {
      id: "innovation",
      icon: FaRocket,
      title: "R&D and Prototypes",
      subtitle: "AI • Data Processing • Analytics",
      color: "pink",
      description: "Prototype systems for AI and data processing workflows.",
      details: [
        "Generative AI integrations for content workflows",
        "PDF processing and extraction pipelines",
        "BigQuery analytics and reporting",
        "Automation workflows with BullMQ",
      ],
    },
  ];

  const allWidgets = [...systemFocusWidgets, ...expertiseWidgets];

  const handleWidgetClick = (widgetId) => {
    setActiveModal(widgetId);
    onOpen();
  };

  const getModalContent = () => {
    const widget = allWidgets.find((w) => w.id === activeModal);
    if (!widget) return null;

    return (
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Box
            w="80px"
            h="80px"
            borderRadius="full"
            bg={`${widget.color}.100`}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={4}
          >
            <Icon as={widget.icon} boxSize={10} color={`${widget.color}.600`} />
          </Box>
          <Text fontSize="xl" fontWeight="bold" color={skillTextColor} mb={2}>
            {widget.title}
          </Text>
          <Text
            fontSize="lg"
            color={`${widget.color}.600`}
            fontWeight="medium"
            mb={4}
          >
            {widget.subtitle}
          </Text>
          <Text color={textColor} lineHeight="tall" className="poppins-light">
            {widget.description}
          </Text>
        </Box>

        <Box>
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color={skillTextColor}
            mb={4}
          >
            Key Areas:
          </Text>
          <VStack spacing={3} align="stretch">
            {widget.details.map((detail, index) => (
              <Flex key={index} align="center" gap={3}>
                <Box
                  w="2"
                  h="2"
                  borderRadius="full"
                  bg={`${widget.color}.500`}
                  flexShrink={0}
                />
                <Text color={textColor} className="poppins-light">
                  {detail}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>
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
      <VStack align="stretch" spacing={{ base: 6, md: 8 }}>
        <HeroHeader
          title="Systems Profile"
          subtitle="Engineering&nbsp;"
          highlightText="Focus"
        />
        <TextWithImage
          textContent={textContent}
          imageSrc={dev_avatar}
          footerTag="Systems Engineering Profile"
        />
      </VStack>
      <Box mt={{ base: 8, md: 12 }}>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="semibold"
          color={textColor}
          mb={8}
          className="poppins"
          textAlign="center"
        >
          Engineering Focus Areas
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
          {systemFocusWidgets.map((widget) => (
            <GridItem key={widget.id}>
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
                  borderColor: `${widget.color}.400`,
                  _before: {
                    transform: "scaleX(1)",
                  },
                }}
                transition="all 0.4s ease"
                position="relative"
                overflow="hidden"
                onClick={() => handleWidgetClick(widget.id)}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  bg: `linear-gradient(90deg, ${widget.color}.400, ${widget.color}.600)`,
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
                    bg={`${widget.color}.100`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s ease"
                    _groupHover={{
                      transform: "scale(1.1) rotate(5deg)",
                    }}
                  >
                    <Icon
                      as={widget.icon}
                      boxSize={8}
                      color={`${widget.color}.600`}
                      transition="all 0.3s ease"
                    />
                  </Box>

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color={skillTextColor}
                    className="poppins"
                  >
                    {widget.title}
                  </Text>

                  <Text
                    fontSize="sm"
                    color={`${widget.color}.600`}
                    fontWeight="medium"
                    className="poppins"
                  >
                    {widget.subtitle}
                  </Text>

                  <Button
                    size="sm"
                    variant="outline"
                    colorScheme={widget.color}
                    borderRadius="full"
                    _hover={{
                      transform: "scale(1.05)",
                      boxShadow: "md",
                    }}
                    transition="all 0.2s ease"
                  >
                    Learn More
                  </Button>
                </VStack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Box mt={{ base: 8, md: 12 }}>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="semibold"
          color={textColor}
          mb={8}
          className="poppins"
          textAlign="center"
        >
          Technical Capabilities
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
          {expertiseWidgets.map((widget) => (
            <GridItem key={widget.id}>
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
                  borderColor: `${widget.color}.400`,
                  _before: {
                    transform: "scaleX(1)",
                  },
                }}
                transition="all 0.4s ease"
                position="relative"
                overflow="hidden"
                onClick={() => handleWidgetClick(widget.id)}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  bg: `linear-gradient(90deg, ${widget.color}.400, ${widget.color}.600)`,
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
                    bg={`${widget.color}.100`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s ease"
                    _groupHover={{
                      transform: "scale(1.1) rotate(5deg)",
                    }}
                  >
                    <Icon
                      as={widget.icon}
                      boxSize={8}
                      color={`${widget.color}.600`}
                      transition="all 0.3s ease"
                    />
                  </Box>

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color={skillTextColor}
                    className="poppins"
                  >
                    {widget.title}
                  </Text>

                  <Text
                    fontSize="sm"
                    color={`${widget.color}.600`}
                    fontWeight="medium"
                    className="poppins"
                  >
                    {widget.subtitle}
                  </Text>

                  <Button
                    size="sm"
                    variant="outline"
                    colorScheme={widget.color}
                    borderRadius="full"
                    _hover={{
                      transform: "scale(1.05)",
                      boxShadow: "md",
                    }}
                    transition="all 0.2s ease"
                  >
                    Learn More
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
            ? allWidgets.find((w) => w.id === activeModal)?.title
            : ""
        }
        size="md"
      >
        {getModalContent()}
      </GSAPModal>
    </VStack>
  );
};

const HeroWithContent = HeroSection(AboutContent);

const About = () => {
  return (
    <>
      <SEO
        title="About Wilmarx - Systems Engineer & Backend Architect"
        description="Systems engineering profile focused on backend architecture, reliability engineering, queue-based processing systems, data architecture, and observability."
        url="https://the-marx-stack.vercel.app/about"
        keywords="Wilmarx John Cayabyab, systems engineer, backend architect, reliability engineering, system design, failure modeling, queue-based processing, data architecture, observability, platform engineering"
      />
      <HeroWithContent
        footerHead="Systems"
        footerBody="Portfolio"
        footerSub="Click to view"
        navigateTo="/projects"
      />
    </>
  );
};

export default About;
