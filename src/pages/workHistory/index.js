

import {
  Text,
  useColorModeValue,
  VStack,
  Box,
  Grid,
  GridItem,
  Flex,
  Icon,
  Button,
  useDisclosure,
  Badge,
  HStack,
} from "@chakra-ui/react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaUsers,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa";
import HeroSection from "../../components/heroSection";
import HeroHeader from "../../components/HeroHeader";
import GSAPModal from "../../components/gsapModal";
import { useState } from "react";

const WorkHistoryContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeModal, setActiveModal] = useState(null);

  const textColor = useColorModeValue("gray.600", "gray.400");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const headingColor = useColorModeValue("gray.800", "gray.200");

  const jobWidgets = [
    {
      id: "cto-sysgo-solutions",
      icon: FaCode,
      title: "Chief Technology Officer",
      company: "SysGo Solutions",
      duration: "2023 - Present",
      status: "Current",
      color: "blue",
      description:
        "Leading technical strategy and full-stack development for a startup team providing comprehensive systems for dental clinics.",
      responsibilities: [
        "Architect and develop full-stack dental clinic management systems",
        "Lead technical strategy and technology stack decisions",
        "Build scalable web applications using Next.js, React, and TypeScript",
        "Design and implement secure backend APIs with Node.js and Express",
        "Develop mobile applications for clinic staff using React Native and Expo",
        "Manage database design and optimization for healthcare data",
        "Implement HIPAA-compliant security measures and data protection",
        "Lead development team and establish coding standards",
        "Plan and execute product roadmap and feature development",
      ],
      technologies: [
        "Next.js 15.1.4",
        "React 19.0.0-rc.1",
        "TypeScript 5.x",
        "Expo SDK 53",
        "React Native 0.79.4",
        "Node.js ≥18",
        "Express.js 4.18.2",
        "MySQL 2",
        "JWT & bcryptjs",
        "Chakra UI & MUI 5",
        "ApexCharts",
        "Render.com",
      ],
      achievements: [
        "Built comprehensive dental clinic management system from scratch",
        "Implemented HIPAA-compliant data security and patient privacy protection",
        "Developed mobile app for clinic staff with real-time patient data access",
        "Established scalable architecture supporting multiple clinic locations",
        "Reduced clinic administrative tasks by 60% through automation",
      ],
    },
    {
      id: "software-engineer-stappl",
      icon: FaServer,
      title: "Software Engineer",
      company: "Stappl",
      duration: "2023 - Present",
      status: "Current",
      color: "green",
      description:
        "Developing comprehensive full-stack solutions with modern technology stack including React, NestJS, PostgreSQL, and advanced queue processing systems.",
      responsibilities: [
        "Develop and maintain full-stack web applications using React 18.3.1 and TypeScript 5.2.2",
        "Build enterprise-grade backend services with NestJS 10.0.0 and PostgreSQL",
        "Implement Drizzle ORM 0.31.2 for type-safe database operations",
        "Design and develop admin panels using Refine.dev 4.47.1 and Material-UI 5.8.6",
        "Integrate AWS Cognito for authentication and AWS SDK v3 for cloud services",
        "Implement BullMQ job processing system for background task automation",
        "Develop Google Maps integration with geocoding and location services",
        "Build responsive UI components with Tailwind CSS 3.4.4 and Chakra UI",
        "Implement comprehensive testing with Vitest 1.6.0 and Jest 29.5.0",
        "Deploy applications using Heroku with Docker containerization",
        "Integrate Vonage SDK for SMS and communication services",
        "Implement cron jobs with @nestjs/schedule for workflow automation",
      ],
      technologies: [
        "React 18.3.1",
        "TypeScript 5.2.2",
        "Vite 5.3.1",
        "NestJS 10.0.0",
        "PostgreSQL",
        "Drizzle ORM 0.31.2",
        "BullMQ",
        "AWS Cognito",
        "AWS SDK v3",
        "Google Maps API 3.4.1",
        "Refine.dev 4.47.1",
        "Material-UI 5.8.6",
        "Tailwind CSS 3.4.4",
        "Chakra UI",
        "Vitest 1.6.0",
        "Jest 29.5.0",
        "Heroku",
        "Docker",
        "Vonage SDK",
        "React Hook Form 7.52.1",
        "Axios 1.7.2",
        "React Icons 5.2.1",
      ],
      achievements: [
        "Built comprehensive full-stack applications with modern technology stack",
        "Implemented BullMQ job processing system for complex workflow automation",
        "Developed admin panels with Refine.dev reducing development time by 50%",
        "Established type-safe database operations with Drizzle ORM",
        "Implemented comprehensive testing strategies with Vitest and Jest",
        "Deployed scalable applications using Heroku and Docker",
        "Created responsive UI components with Tailwind CSS and Chakra UI",
        "Built custom dependency injection system for clean architecture",
      ],
    },
    {
      id: "it-incharge-asia-scopro",
      icon: FaDatabase,
      title: "IT Administrator",
      company: "Asia Scopro Optics Co., Inc.",
      duration: "July 2024 - Present",
      status: "Current",
      color: "purple",
      description:
        "Administering and maintaining comprehensive IT infrastructure including servers, networks, and Fortinet firewall systems.",
      responsibilities: [
        "Administer and maintain IT infrastructure (servers, network systems, Fortinet firewalls)",
        "Ensure high availability and security of all IT systems",
        "Conduct daily troubleshooting for software, hardware, and connectivity issues",
        "Implement and enforce IT policies aligned with cybersecurity best practices",
        "Manage data security through file-sharing policies and user access control",
        "Create and maintain user accounts, policies, and email systems on servers",
        "Monitor IT MIS for operational efficiency and system health",
        "Purchase, deploy, and manage IT hardware, supplies, and network equipment",
        "Provide end-user support, training, and system access assistance",
        "Maintain network performance through monitoring and optimization",
      ],
      technologies: [
        "Fortinet Firewall",
        "Windows Server",
        "Active Directory",
        "Network Administration",
        "Cybersecurity",
        "IT Infrastructure",
        "System Monitoring",
        "Backup Solutions",
        "Email Systems",
        "Hardware Management",
      ],
      achievements: [
        "Maintained 99.9% system uptime across all IT infrastructure",
        "Reduced security incidents by 80% through improved policies",
        "Streamlined IT operations saving 15 hours per week",
        "Successfully managed network migration with zero downtime",
        "Implemented comprehensive backup system protecting critical data",
      ],
    },
    {
      id: "it-specialist-healthier-fit",
      icon: FaServer,
      title: "IT Specialist / IT Lead",
      company: "Healthier Fit Co. LTD.",
      duration: "1 Year 2 Months",
      status: "Completed",
      color: "green",
      description:
        "Led IT department team members and provided comprehensive IT support across software, hardware, networks, and systems.",
      responsibilities: [
        "Led and motivated IT department team members to align with organizational goals",
        "Delivered full-stack IT support across software, hardware, networks, servers, and systems",
        "Installed and configured networks to support company operations",
        "Conducted troubleshooting and maintenance for systems, hardware, and user workstations",
        "Regularly evaluated IT systems to ensure scalability and efficiency",
        "Handled network administration, access control, and performance monitoring",
        "Provided user training on network security and safe computer usage practices",
        "Anticipated IT resource needs and prepared cost reports for hardware/software upgrades",
        "Supported daily IT operations ensuring minimal downtime and reliable network connectivity",
      ],
      technologies: [
        "Network Administration",
        "System Administration",
        "Hardware Management",
        "Software Installation",
        "User Training",
        "IT Security",
        "Network Configuration",
        "Troubleshooting",
        "System Monitoring",
        "Cost Management",
      ],
      achievements: [
        "Led IT team to achieve 99.5% system uptime across all operations",
        "Reduced IT support tickets by 45% through proactive maintenance",
        "Successfully implemented network security protocols reducing incidents by 70%",
        "Trained 50+ employees on IT security best practices",
        "Optimized IT infrastructure saving company $25K annually",
      ],
    },
    {
      id: "intern-tesda",
      icon: FaGraduationCap,
      title: "IT Department and Assessment Team Intern",
      company: "TESDA PTC-LLDA",
      duration: "3 Months",
      status: "Completed",
      color: "teal",
      description:
        "Gained foundational experience in IT operations, data management, and system administration in a government training institution.",
      responsibilities: [
        "Accurately encoded and verified data in the company database ensuring accuracy and timeliness",
        "Organized and maintained records, files, and databases for easy accessibility",
        "Assisted in creating standardized procedures for data entry and IT processes",
        "Provided IT support on software, hardware, networks, and user systems",
        "Installed new software and hardware components to support daily operations",
        "Troubleshot systems and user workstations ensuring smooth operation of networks",
        "Collaborated with team members to ensure data accuracy, security, and consistency",
        "Responded to data inquiries and IT concerns promptly with excellent customer service",
      ],
      technologies: [
        "Database Management",
        "Data Entry & Verification",
        "System Administration",
        "Hardware Installation",
        "Software Installation",
        "Network Troubleshooting",
        "IT Support",
        "Record Management",
        "Customer Service",
        "Process Documentation",
      ],
      achievements: [
        "Successfully completed 3-month internship program with excellent performance",
        "Maintained 100% data accuracy across all database entries",
        "Improved data processing efficiency by 30% through standardized procedures",
        "Received positive feedback from supervisors and team members",
        "Contributed to streamlining IT processes and documentation",
      ],
    },
    {
      id: "freelance",
      icon: FaUsers,
      title: "Freelance Full-Stack Developer",
      company: "Various Clients",
      duration: "2018 - Present",
      status: "Ongoing",
      color: "pink",
      description:
        "Providing comprehensive full-stack development services to diverse clients, combining software development expertise with IT infrastructure knowledge.",
      responsibilities: [
        "Develop custom web applications using React, Next.js, and TypeScript",
        "Build mobile applications with React Native and Expo",
        "Create secure backend APIs with Node.js, Express, and MySQL",
        "Implement data visualization dashboards and interactive maps",
        "Provide IT consulting and system architecture recommendations",
        "Manage project timelines, budgets, and client communications",
        "Maintain and optimize existing applications for performance",
        "Provide ongoing support and maintenance for deployed systems",
        "Integrate IT infrastructure solutions with custom software development",
        "Implement modern technology stacks including NestJS, PostgreSQL, and Drizzle ORM",
        "Develop admin panels using Refine.dev and Material-UI",
        "Integrate cloud services including AWS Cognito and Google Maps API",
      ],
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript 5.x",
        "React Native",
        "Expo SDK",
        "Node.js",
        "Express.js",
        "NestJS 10.0.0",
        "MySQL",
        "PostgreSQL",
        "Drizzle ORM 0.31.2",
        "Chakra UI",
        "Material UI",
        "Refine.dev 4.47.1",
        "ApexCharts",
        "Google Maps API",
        "AWS Cognito",
        "JWT Authentication",
        "Render.com",
        "Heroku",
        "Docker",
        "BullMQ",
        "IT Infrastructure",
        "System Administration",
      ],
      achievements: [
        "Completed 30+ freelance projects across web, mobile, and IT infrastructure",
        "Maintained 98% client satisfaction rate with 5-star reviews",
        "Built long-term relationships with 10+ recurring clients",
        "Successfully launched 5 mobile applications on app stores",
        "Generated $100K+ in freelance revenue over 6 years",
        "Specialized in healthcare, e-commerce, and business automation solutions",
        "Combined software development with IT infrastructure expertise",
        "Implemented modern technology stacks for enhanced performance",
        "Developed comprehensive admin panels and management systems",
        "Integrated advanced features including queue processing and real-time communication",
      ],
    },
  ];

  const handleWidgetClick = (widgetId) => {
    setActiveModal(widgetId);
    onOpen();
  };

  const getModalContent = () => {
    const job = jobWidgets.find((j) => j.id === activeModal);
    if (!job) return null;

    return (
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Box
            w="80px"
            h="80px"
            borderRadius="full"
            bg={`${job.color}.100`}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={4}
          >
            <Icon as={job.icon} boxSize={10} color={`${job.color}.600`} />
          </Box>
          <Text fontSize="2xl" fontWeight="bold" color={headingColor} mb={2}>
            {job.title}
          </Text>
          <Text
            fontSize="lg"
            color={`${job.color}.600`}
            fontWeight="medium"
            mb={2}
          >
            {job.company}
          </Text>
          <HStack spacing={3} justify="center">
            <Badge
              colorScheme={
                job.status === "Current"
                  ? "green"
                  : job.status === "Ongoing"
                  ? "blue"
                  : "gray"
              }
              variant="subtle"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="sm"
            >
              {job.status}
            </Badge>
            <Text fontSize="sm" color={textColor}>
              {job.duration}
            </Text>
          </HStack>
        </Box>

        <Text
          color={textColor}
          lineHeight="tall"
          className="poppins-light"
          fontSize="md"
        >
          {job.description}
        </Text>

        <Box>
          <Text fontSize="lg" fontWeight="semibold" color={headingColor} mb={3}>
            Key Responsibilities:
          </Text>
          <VStack spacing={2} align="stretch">
            {job.responsibilities.map((responsibility, index) => (
              <Flex key={index} align="center" gap={3}>
                <Box
                  w="2"
                  h="2"
                  borderRadius="full"
                  bg={`${job.color}.500`}
                  flexShrink={0}
                />
                <Text color={textColor} className="poppins-light" fontSize="sm">
                  {responsibility}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="semibold" color={headingColor} mb={3}>
            Technologies Used:
          </Text>
          <Flex wrap="wrap" gap={2}>
            {job.technologies.map((tech, index) => (
              <Badge
                key={index}
                colorScheme={job.color}
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
          <Text fontSize="lg" fontWeight="semibold" color={headingColor} mb={3}>
            Key Achievements:
          </Text>
          <VStack spacing={2} align="stretch">
            {job.achievements.map((achievement, index) => (
              <Flex key={index} align="center" gap={3}>
                <Box
                  w="2"
                  h="2"
                  borderRadius="full"
                  bg="green.500"
                  flexShrink={0}
                />
                <Text color={textColor} className="poppins-light" fontSize="sm">
                  {achievement}
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
      spacing={{ base: 6, md: 8 }}
      maxW="6xl"
      w="full"
      pb={8}
    >
      <VStack align="flex-start" spacing={4}>
        <HeroHeader title="My Work" subtitle="Hi" highlightText="story" />
      </VStack>

      <Box>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="semibold"
          color={textColor}
          mb={6}
          className="poppins"
          textAlign="center"
        >
          Explore My Professional Journey
        </Text>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 4, md: 6 }}
          w="full"
        >
          {jobWidgets.map((job) => (
            <GridItem key={job.id}>
              <Box
                bg={cardBg}
                p={5}
                borderRadius="2xl"
                boxShadow="lg"
                border="1px solid"
                borderColor={cardBorderColor}
                cursor="pointer"
                _hover={{
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "2xl",
                  borderColor: `${job.color}.400`,
                  _before: {
                    transform: "scaleX(1)",
                  },
                }}
                transition="all 0.4s ease"
                position="relative"
                overflow="hidden"
                onClick={() => handleWidgetClick(job.id)}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  bg: `linear-gradient(90deg, ${job.color}.400, ${job.color}.600)`,
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.4s ease",
                }}
              >
                <VStack spacing={3} align="center" textAlign="center">
                  <Box
                    w="50px"
                    h="50px"
                    borderRadius="full"
                    bg={`${job.color}.100`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s ease"
                  >
                    <Icon
                      as={job.icon}
                      boxSize={6}
                      color={`${job.color}.600`}
                      transition="all 0.3s ease"
                    />
                  </Box>

                  <Text
                    fontSize="md"
                    fontWeight="bold"
                    color={headingColor}
                    className="poppins"
                  >
                    {job.title}
                  </Text>

                  <Text
                    fontSize="xs"
                    color={`${job.color}.600`}
                    fontWeight="medium"
                    className="poppins"
                  >
                    {job.company}
                  </Text>

                  <HStack spacing={2}>
                    <Badge
                      colorScheme={
                        job.status === "Current"
                          ? "green"
                          : job.status === "Ongoing"
                          ? "blue"
                          : "gray"
                      }
                      variant="subtle"
                      px={2}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                    >
                      {job.status}
                    </Badge>
                  </HStack>

                  <Button
                    size="sm"
                    variant="outline"
                    colorScheme={job.color}
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
          activeModal ? jobWidgets.find((j) => j.id === activeModal)?.title : ""
        }
        size="md"
      >
        {getModalContent()}
      </GSAPModal>
    </VStack>
  );
};

const HeroWithContent = HeroSection(WorkHistoryContent);

const WorkHistory = () => {
  return (
    <HeroWithContent
      footerHead="Would you like to"
      footerBody="Work with me?"
      footerSub="Click to view"
      navigateTo="/contact"
    />
  );
};

export default WorkHistory;
