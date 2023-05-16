import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue,
    Link
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
  import {GrTwitter,GrLinkedinOption} from 'react-icons/gr'
  
  export default function Contact({contact}) {
    return (
      <Container ref={contact} id="contact" bg={useColorModeValue("white","gray.800")} maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            border={'3px solid #4FC3F7'}
            color={useColorModeValue("black","white")}
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color={useColorModeValue('#616161','#E0E0E0')}>
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          id="contact-phone"
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color={useColorModeValue('#616161','#E0E0E0')}
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                          +91-7275727570
                        </Button>
                        <Button
                          id="contact-email"
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color={useColorModeValue('#616161','#E0E0E0')}
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          sarimkhan7275@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color={useColorModeValue('#616161','#E0E0E0')}
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                          Jaunpur,UP
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <Link isExternal href="https://www.linkedin.com/in/sarim-khan-40a446233/">
                        <IconButton
                          id="contact-linkedin"
                          aria-label="linkedIn"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF' }}
                          icon={<GrLinkedinOption size="28px" />}
                        />
                      </Link>
                      <Link isExternal href="https://twitter.com/SARimCASM">
                        <IconButton
                          aria-label="twitter"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF' }}
                          icon={<GrTwitter size="28px" />}
                        />
                      </Link>
                      <Link isExternal href="https://github.com/sarimkhan208" >
                        <IconButton
                          id="contact-github"
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF' }}
                          icon={<BsGithub size="28px" />}
                        />
                      </Link>
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }