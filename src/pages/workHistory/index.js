

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
  FaGraduationCap,
} from "react-icons/fa";
import HeroSection from "../../components/heroSection";
import HeroHeader from "../../components/HeroHeader";
import GSAPModal from "../../components/gsapModal";
import SEO from "../../components/SEO";
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
      id: "software-engineer-stappl",
      icon: FaServer,
      title: "Chief Information Officer",
      company: "Stappl Inc.",
      duration: "September 2025 - Present",
      status: "Current",
      color: "green",
      description:
        "Lead architecture and reliability for production platforms across veterinary care and education, with focus on system behavior under load.",
      responsibilities: [
        "Lead system architecture for Pawnec, Vetscribe, and Cerevium platforms",
        "Design data architecture and migration discipline for production databases",
        "Build queue-based processing systems for workflow orchestration",
        "Define observability requirements for critical workflows",
        "Integrate authentication and communication services with reliability constraints",
        "Containerize services for deployment isolation and environment parity",
        "Implement controlled data access and record traceability",
        "Maintain multi-environment release workflows and rollback safety",
        "Coordinate system behavior under load and failure conditions",
      ],
      technologies: [
        "React 18.3.1",
        "TypeScript 5.2.2",
        "Next.js 16.1.1",
        "Vite 5.3.1",
        "Python",
        "FastAPI",
        "Streamlit",
        "PostgreSQL",
        "AWS RDS",
        "AWS Cognito",
        "AWS SES",
        "AWS SNS",
        "AWS S3",
        "Google Generative AI",
        "Google Cloud Storage",
        "Google BigQuery",
        "Firebase",
        "Docker",
        "Docker Compose",
        "Google Maps API",
        "Chakra UI 3.31.0",
        "Tailwind CSS 3.4.4",
        "React Hook Form 7.52.1",
        "Axios 1.7.2",
        "React Icons 5.2.1",
        "Vitest 1.6.0",
      ],
      achievements: [
        "Delivered production platforms with defined failure boundaries and recovery workflows",
        "Reduced documentation overhead with structured clinical workflows",
        "Implemented queue-based processing systems for reliable background workloads",
        "Established data migration controls to reduce release risk",
        "Deployed multi-service architecture with environment parity and rollback safety",
      ],
    },
    {
      id: "cto-sysgo-solutions",
      icon: FaCode,
      title: "Chief Technology Officer",
      company: "SysGo Solutions",
      duration: "2023 - Present",
      status: "Current",
      color: "blue",
      description:
        "Set technical direction for dental clinic platforms with focus on system boundaries, data integrity, and operational readiness.",
      responsibilities: [
        "Architect clinic management platforms with clear workflow boundaries",
        "Define data architecture and access control for healthcare data",
        "Implement secure backend APIs with stability constraints",
        "Design mobile access paths for field and clinic workflows",
        "Establish operational practices for reliability and release safety",
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
        "Delivered a clinic management platform with multi-location support",
        "Implemented access control and data protection boundaries",
        "Introduced workflow automation to reduce manual operations",
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
        "Operate and maintain core IT infrastructure with focus on availability, security, and operational continuity.",
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
        "Maintained operational uptime across core infrastructure",
        "Reduced security incidents through policy and access controls",
        "Completed network migration with controlled downtime",
        "Implemented backup systems for critical data recovery",
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
        "Led IT operations for networks, systems, and support workflows with emphasis on reliability and continuity.",
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
        "Maintained high availability across operational systems",
        "Reduced incident volume through proactive maintenance",
        "Implemented security protocols to lower risk exposure",
        "Delivered security training for operational staff",
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
        "Supported IT operations and data management for a government training institution.",
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
        "Maintained data accuracy across assigned datasets",
        "Improved data processing efficiency through standardized procedures",
        "Contributed to process documentation and operational support",
      ],
    },
    {
      id: "freelance",
      icon: FaUsers,
      title: "Independent Systems Engineer",
      company: "Various Clients",
      duration: "2018 - Present",
      status: "Ongoing",
      color: "pink",
      description:
        "Deliver system architecture and backend platforms for clients with operational constraints and reliability requirements.",
      responsibilities: [
        "Design backend platforms and data architectures",
        "Build queue-based processing systems and workflow orchestration",
        "Implement secure APIs with access control boundaries",
        "Provide architecture reviews and operational guidance",
        "Maintain systems for performance, reliability, and recovery",
        "Integrate infrastructure components for deployment and storage",
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
        "Delivered production platforms across healthcare and operations",
        "Improved stability for systems with recurring workload spikes",
        "Introduced queue-based processing systems for critical workflows",
        "Standardized deployment and rollback practices for clients",
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
            Operational Responsibilities:
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
            Infrastructure Components:
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
            Operational Outcomes:
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
        <HeroHeader title="Systems" subtitle="Lead" highlightText="ership" />
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
          Systems Leadership and Operations
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
    <>
      <SEO
        title="Work History - Wilmarx | Systems Leadership & Operations"
        description="Work history focused on systems leadership, platform architecture, reliability engineering, and IT operations."
        url="https://the-marx-stack.vercel.app/work-history"
        keywords="systems leadership, platform architecture, reliability engineering, CIO, CTO, IT operations, infrastructure engineering, backend systems"
      />
      <HeroWithContent
        footerHead="Engagement"
        footerBody="Channels"
        footerSub="Click to view"
        navigateTo="/contact"
      />
    </>
  );
};

export default WorkHistory;
