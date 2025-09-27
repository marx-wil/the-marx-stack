import {
  Text,
  useColorModeValue,
  VStack,
  Box,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Icon,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import HeroSection from "../../components/heroSection";
import { useState } from "react";
import GSAPModal from "../../components/gsapModal";
import HeroHeader from "../../components/HeroHeader";
import pagesConfig from "../../data/pagesConfig.json";

const ContactContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const config = pagesConfig.contact;

  const textColor = useColorModeValue("gray.600", "gray.400");
  const accentColor = useColorModeValue("blue.500", "blue.400");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.800", "gray.200");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: config.form.successMessage.title,
        description: config.form.successMessage.description,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      onClose();
    }, 2000);
  };

  // Icon mapping for dynamic icon loading
  const iconMap = {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaGithub,
    FaLinkedin,
  };

  const contactWidgets = config.contactWidgets.map(widget => ({
    ...widget,
    icon: iconMap[widget.icon]
  }));

  const handleWidgetClick = (widgetId) => {
    setActiveModal(widgetId);
    onOpen();
  };

  const getModalContent = () => {
    const widget = contactWidgets.find((w) => w.id === activeModal);
    if (!widget) return null;

    if (widget.id === "contact-form") {
      return (
        <VStack spacing={6} align="stretch">
          <Box textAlign="center" mb={4}>
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
              <Icon
                as={widget.icon}
                boxSize={10}
                color={`${widget.color}.600`}
              />
            </Box>
            <Text fontSize="xl" fontWeight="bold" color={headingColor} mb={2}>
              {widget.title}
            </Text>
            <Text color={textColor} lineHeight="tall" className="poppins-light">
              {widget.description}
            </Text>
          </Box>

          <form onSubmit={handleSubmit}>
            <VStack spacing={6}>
              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap={4}
                w="full"
              >
                {config.form.fields.slice(0, 2).map((field) => (
                  <FormControl key={field.name} isRequired={field.required}>
                    <FormLabel color={textColor} className="poppins">
                      {field.label}
                    </FormLabel>
                    <Input
                      name={field.name}
                      type={field.type}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      borderRadius="lg"
                      borderColor={borderColor}
                      _focus={{
                        borderColor: accentColor,
                        boxShadow: `0 0 0 1px ${accentColor}`,
                      }}
                      _hover={{
                        borderColor: accentColor,
                      }}
                      transition="all 0.2s ease"
                    />
                  </FormControl>
                ))}
              </Grid>

              {config.form.fields.slice(2).map((field) => (
                <FormControl key={field.name} isRequired={field.required}>
                  <FormLabel color={textColor} className="poppins">
                    {field.label}
                  </FormLabel>
                  {field.type === "textarea" ? (
                    <Textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      rows={field.rows}
                      borderRadius="lg"
                      borderColor={borderColor}
                      resize="vertical"
                      _focus={{
                        borderColor: accentColor,
                        boxShadow: `0 0 0 1px ${accentColor}`,
                      }}
                      _hover={{
                        borderColor: accentColor,
                      }}
                      transition="all 0.2s ease"
                    />
                  ) : (
                    <Input
                      name={field.name}
                      type={field.type}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      borderRadius="lg"
                      borderColor={borderColor}
                      _focus={{
                        borderColor: accentColor,
                        boxShadow: `0 0 0 1px ${accentColor}`,
                      }}
                      _hover={{
                        borderColor: accentColor,
                      }}
                      transition="all 0.2s ease"
                    />
                  )}
                </FormControl>
              ))}

              <Button
                type="submit"
                isLoading={isSubmitting}
                loadingText={config.form.loadingText}
                rightIcon={<FaPaperPlane />}
                colorScheme="blue"
                size="lg"
                w="full"
                borderRadius="lg"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                _active={{
                  transform: "translateY(0px)",
                }}
                transition="all 0.2s ease"
                className="poppins"
                fontWeight="semibold"
              >
                {config.form.submitText}
              </Button>
            </VStack>
          </form>
        </VStack>
      );
    }

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
          <Text fontSize="2xl" fontWeight="bold" color={headingColor} mb={2}>
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
          <Text
            color={textColor}
            lineHeight="tall"
            className="poppins-light"
            mb={6}
          >
            {widget.description}
          </Text>

          {widget.href && (
            <Button
              as="a"
              href={widget.href}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme={widget.color}
              size="lg"
              leftIcon={<Icon as={widget.icon} />}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.2s ease"
            >
              {widget.action}
            </Button>
          )}
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
          {contactWidgets.map((widget) => (
            <GridItem key={widget.id}>
              <Box
                bg={cardBg}
                p={5}
                borderRadius="2xl"
                boxShadow="lg"
                border="1px solid"
                borderColor={borderColor}
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
                <VStack spacing={3} align="center" textAlign="center">
                  <Box
                    w="50px"
                    h="50px"
                    borderRadius="full"
                    bg={`${widget.color}.100`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s ease"
                  >
                    <Icon
                      as={widget.icon}
                      boxSize={6}
                      color={`${widget.color}.600`}
                      transition="all 0.3s ease"
                    />
                  </Box>

                  <Text
                    fontSize="md"
                    fontWeight="bold"
                    color={headingColor}
                    className="poppins"
                  >
                    {widget.title}
                  </Text>

                  <Text
                    fontSize="xs"
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
                    {widget.action}
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
            ? contactWidgets.find((w) => w.id === activeModal)?.title
            : ""
        }
        size="md"
      >
        {getModalContent()}
      </GSAPModal>
    </VStack>
  );
};

const HeroWithContent = HeroSection(ContactContent);

const Contact = () => {
  const config = pagesConfig.contact;
  return (
    <HeroWithContent
      footerHead={config.footer.head}
      footerBody={config.footer.body}
      footerSub={config.footer.sub}
      navigateTo={config.footer.navigateTo}
    />
  );
};

export default Contact;
