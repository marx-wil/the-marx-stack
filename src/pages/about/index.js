

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
        "Hi, I'm Wilmarx — a systems developer and tech enthusiast with a lifelong curiosity for how things work beneath the surface. That fascination with the inner workings of technology led me into the world of IT and systems development, where I get to turn that passion into purposeful work.",
    },
    {
      content:
        "As an IT professional, I help design and maintain systems that keep operations running smoothly and securely. Whether configuring servers, managing backend logic, or troubleshooting issues, I enjoy building tools that are efficient, reliable, and impactful.",
      display: { base: "none", xl: "block" },
    },
    {
      content:
        "I'm also growing as a systems developer, diving into frontend and backend technologies to craft seamless digital experiences. I'm always eager to learn and adapt — because in tech, there's always something new to explore and improve.",
      display: { base: "none", md: "block" },
    },
  ];

  const interactiveWidgets = [
    {
      id: "frontend",
      icon: FaCode,
      title: "Frontend Excellence",
      subtitle: "Next.js 15 • React 19 • TypeScript 5.x",
      color: "blue",
      description:
        "Crafting modern, responsive web applications with cutting-edge frameworks and UI libraries.",
      details: [
        "Next.js 15.1.4 with App Router and Server Components",
        "React 19.0.0-rc.1 with latest features and optimizations",
        "TypeScript 4.9.4/5.x for type-safe development",
        "Chakra UI and Material UI (MUI 5) for component libraries",
        "Refine.dev for rapid admin panel development",
        "Emotion and NativeWind for styling solutions",
        "Framer Motion for smooth animations",
        "React Router v6 and Expo Router for navigation",
        "React Hook Form for efficient form handling",
        "Vite 5.3.1 for lightning-fast development and builds",
        "Tailwind CSS 3.4.4 with custom design system",
        "React Icons 5.2.1 for comprehensive iconography",
        "Custom dependency injection system for clean architecture",
      ],
    },
    {
      id: "mobile",
      icon: FaRocket,
      title: "Mobile Development",
      subtitle: "Expo SDK 53 • React Native 0.79.4",
      color: "cyan",
      description:
        "Building cross-platform mobile applications with React Native and Expo ecosystem.",
      details: [
        "Expo SDK 53 with latest native modules and APIs",
        "React Native 0.79.4 with React 19.0.0 support",
        "React Navigation 7.x for seamless navigation",
        "Expo modules: Blur, Constants, Font, Haptics, Image",
        "Expo Linking, Splash Screen, Status Bar, Symbols",
        "NativeWind for Tailwind CSS in React Native",
        "Expo Vector Icons for comprehensive icon sets",
        "System UI and Web Browser integrations",
      ],
    },
    {
      id: "backend",
      icon: FaServer,
      title: "Backend Engineering",
      subtitle: "Node.js ≥18 • Express.js 4.18.2 • TypeScript",
      color: "green",
      description:
        "Building secure, scalable server-side applications with modern Node.js ecosystem.",
      details: [
        "Node.js (≥18) with Express.js 4.18.2 framework",
        "TypeScript for type-safe backend development",
        "MySQL 2 (mysql2) for robust database operations",
        "JWT authentication with access & refresh tokens",
        "bcryptjs for secure password hashing",
        "Helmet for security headers and CORS protection",
        "Express Validator for input validation",
        "Express Rate Limit and Express Slow Down for API protection",
        "Socket.io for real-time communication",
        "Multer for file uploads, Morgan for logging",
        "Compression and dotenv for optimization",
        "NestJS 10.0.0 with decorators and dependency injection",
        "PostgreSQL with Drizzle ORM 0.31.2 for database operations",
        "AWS Cognito integration for authentication",
        "AWS SDK v3 for cloud services integration",
        "Google Maps Services for geocoding and location data",
        "Vonage SDK for SMS and communication services",
        "Comprehensive validation with class-validator",
        "Cron jobs with @nestjs/schedule for automation",
      ],
    },
    {
      id: "data-viz",
      icon: FaChartLine,
      title: "Data Visualization",
      subtitle: "ApexCharts • Maps • Tables",
      color: "purple",
      description:
        "Creating interactive data visualizations and mapping solutions for complex datasets.",
      details: [
        "ApexCharts and React ApexCharts for dynamic charts",
        "Mapbox GL and Google Maps API integration",
        "React Calendar for scheduling interfaces",
        "TanStack React Table for advanced data tables",
        "Custom visualization components and dashboards",
        "Real-time data updates and interactive features",
        "Google Maps API 3.4.1 for location services",
        "React Google Maps API 2.20.3 integration",
        "Google Places Autocomplete 4.1.0 for address input",
        "Geocoding services for address validation",
        "Distance calculations and proximity services",
        "Custom map components and overlays",
      ],
    },
    {
      id: "dev-tools",
      icon: FaTools,
      title: "Development Tools",
      subtitle: "Vite • Jest • ESLint • Prettier",
      color: "orange",
      description:
        "Modern development workflow with cutting-edge build tools and testing frameworks.",
      details: [
        "Vite, Expo, and Next.js for fast bundling",
        "Jest and React Testing Library for comprehensive testing",
        "ESLint and Prettier for code quality and formatting",
        "Babel 7 for JavaScript transpilation",
        "PostCSS + Autoprefixer for CSS processing",
        "Nodemon for development server automation",
        "Git workflows and version control best practices",
        "Vitest 1.6.0 for fast unit testing",
        "Happy DOM 14.12.3 for browser simulation",
        "Coverage reporting and test analytics",
        "Automated testing in CI/CD pipelines",
        "Code quality monitoring and metrics",
      ],
    },
    {
      id: "ui-components",
      icon: FaPalette,
      title: "UI Components & Utilities",
      subtitle: "React Icons • Dropzone • Scrollbars",
      color: "pink",
      description:
        "Comprehensive UI component libraries and utility tools for enhanced user experiences.",
      details: [
        "React Icons, MUI Icons, and Expo Vector Icons",
        "React Dropzone for file handling interfaces",
        "React Custom Scrollbars for enhanced scrolling",
        "Refine.dev ecosystem (@refinedev/core, mui, cli)",
        "Admin framework with devtools and kbar integration",
        "Custom component development and theming",
        "Material-UI 5.8.6 with comprehensive component library",
        "MUI X Data Grid 6.6.0 for advanced data tables",
        "Refine CLI 2.16.21 for project scaffolding",
        "Kbar integration for keyboard shortcuts",
        "Custom theming and component customization",
      ],
    },
    {
      id: "deployment",
      icon: FaCloud,
      title: "Deployment & Security",
      subtitle: "Render.com • Expo/EAS • Security First",
      color: "teal",
      description:
        "Secure deployment strategies and comprehensive security implementations.",
      details: [
        "Render.com for backend and API hosting",
        "Expo/EAS for mobile app builds and OTA updates",
        "JWT with access & refresh token implementation",
        "Password hashing with bcrypt security",
        "API rate limiting and slowdown protection",
        "Helmet for secure HTTP headers",
        "Input validation and sanitization",
        "CORS protection and security best practices",
        "Heroku deployment with Procfile configuration",
        "Docker containerization for consistent environments",
        "PostgreSQL database with SSL connections",
        "Environment variable management",
        "Production build optimization",
        "Health checks and monitoring",
        "Automated database migrations",
        "Performance monitoring and logging",
      ],
    },
    {
      id: "database-orm",
      icon: FaChartLine,
      title: "Database & ORM",
      subtitle: "PostgreSQL • Drizzle ORM • Migrations",
      color: "indigo",
      description:
        "Managing complex data relationships with modern ORM and migration systems for scalable applications.",
      details: [
        "PostgreSQL with SSL connections and security",
        "Drizzle ORM 0.31.2 for type-safe database operations",
        "Drizzle Kit 0.22.7 for schema management",
        "Comprehensive migration system with version control",
        "Database schema design for complex workflows",
        "Background task scheduling and job management",
        "BullMQ integration for queue processing",
        "Data validation and integrity constraints",
        "Performance optimization and indexing strategies",
        "MySQL 2 (mysql2) for robust database operations",
        "Database relationship management",
        "Query optimization and performance tuning",
      ],
    },
    {
      id: "queue-system",
      icon: FaTools,
      title: "Queue & Job Processing",
      subtitle: "BullMQ • Background Tasks • Automation",
      color: "yellow",
      description:
        "Implementing robust job processing systems with BullMQ for complex workflow automation and background tasks.",
      details: [
        "BullMQ job scheduling and execution system",
        "Background task management with retry logic",
        "Age-based job scheduling for complex protocols",
        "Species-specific protocol automation",
        "Job statistics and monitoring dashboard",
        "Cron-based job processing with NestJS Scheduler",
        "Queue management for complex workflows",
        "Error handling and job failure recovery",
        "Scalable job processing architecture",
        "Job prioritization and load balancing",
        "Real-time job monitoring and alerts",
        "Distributed task processing",
      ],
    },
    {
      id: "admin-panel",
      icon: FaUser,
      title: "Admin Panel Development",
      subtitle: "Refine.dev • Material-UI • React 18",
      color: "purple",
      description:
        "Creating powerful administrative interfaces with modern React frameworks and comprehensive data management.",
      details: [
        "Refine.dev 4.47.1 for rapid admin panel development",
        "Material-UI 5.8.6 with comprehensive component library",
        "React 18 with TypeScript for type-safe development",
        "React Hook Form 7.30.0 for efficient form handling",
        "React Router v6.8.1 for navigation management",
        "MUI X Data Grid 6.6.0 for advanced data tables",
        "Refine CLI 2.16.21 for project scaffolding",
        "Kbar integration for keyboard shortcuts",
        "Custom theming and component customization",
        "Advanced data filtering and search",
        "Role-based access control",
        "Real-time data updates and notifications",
      ],
    },
    {
      id: "experience",
      icon: FaUser,
      title: "Professional IT Journey",
      subtitle: "5+ Years IT & Development Experience",
      color: "orange",
      description:
        "Comprehensive experience spanning IT infrastructure management, full-stack development, and technical leadership across diverse industries.",
      details: [
        "Chief Technology Officer leading complex management systems",
        "IT infrastructure administration and cybersecurity implementation",
        "Full-stack web and mobile application development",
        "Network administration and system security management",
        "Team leadership and technical mentoring in startup environments",
        "Healthcare technology solutions with compliance focus",
        "Cross-platform mobile app development with React Native",
        "IT consulting and system architecture design",
      ],
    },
    {
      id: "innovation",
      icon: FaRocket,
      title: "Innovation Hub",
      subtitle: "AI • ML • Emerging Tech",
      color: "pink",
      description:
        "Exploring cutting-edge technologies and pushing the boundaries of what's possible in software development.",
      details: [
        "Machine learning integration in web apps",
        "AI-powered automation solutions",
        "Blockchain and Web3 exploration",
        "IoT device integration",
        "Real-time data processing systems",
        "AI-powered health monitoring systems",
        "Automated workflow processing with BullMQ",
        "Machine learning integration for predictions",
        "Advanced analytics and reporting",
        "Mobile-first responsive design",
      ],
    },
    {
      id: "philosophy",
      icon: FaLightbulb,
      title: "Development Philosophy",
      subtitle: "Clean • Efficient • Scalable",
      color: "teal",
      description:
        "My approach to software development focuses on creating maintainable, efficient, and scalable solutions.",
      details: [
        "Clean code principles and best practices",
        "Performance optimization and monitoring",
        "Security-first development approach",
        "User experience and accessibility",
        "Continuous learning and improvement",
      ],
    },
  ];

  const handleWidgetClick = (widgetId) => {
    setActiveModal(widgetId);
    onOpen();
  };

  const getModalContent = () => {
    const widget = interactiveWidgets.find((w) => w.id === activeModal);
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
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: 8, md: 16 }}
        w="full"
        alignItems="center"
      >
        <GridItem>
          <HeroHeader title="About" subtitle="I am, " highlightText="Me" />
        </GridItem>

        <GridItem alignSelf="center" position="relative">
          <TextWithImage
            textContent={textContent}
            imageSrc={dev_avatar}
            footerTag="Passionate Developer"
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
          Explore My Expertise
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
          {interactiveWidgets.map((widget) => (
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
            ? interactiveWidgets.find((w) => w.id === activeModal)?.title
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
    <HeroWithContent
      footerHead="Projects I've "
      footerBody="Worked on"
      footerSub="Click to view"
      navigateTo="/projects"
    />
  );
};

export default About;
