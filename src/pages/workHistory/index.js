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
import pagesConfig from "../../data/pagesConfig.json";

const WorkHistoryContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeModal, setActiveModal] = useState(null);
  const config = pagesConfig.workHistory;

  const textColor = useColorModeValue("gray.600", "gray.400");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const headingColor = useColorModeValue("gray.800", "gray.200");

  // Icon mapping for dynamic icon loading
  const iconMap = {
    FaCode,
    FaServer,
    FaDatabase,
    FaUsers,
    FaRocket,
    FaGraduationCap,
  };

  const jobWidgets = config.jobWidgets.map(job => ({
    ...job,
    icon: iconMap[job.icon]
  }));

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
        <HeroHeader 
          title={config.hero.title} 
          subtitle={config.hero.subtitle} 
          highlightText={config.hero.highlightText} 
        />
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
          {config.sectionTitle}
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
  const config = pagesConfig.workHistory;
  return (
    <HeroWithContent
      footerHead={config.footer.head}
      footerBody={config.footer.body}
      footerSub={config.footer.sub}
      navigateTo={config.footer.navigateTo}
    />
  );
};

export default WorkHistory;
