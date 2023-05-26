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
  import React, { useRef, useState } from 'react';
  import emailjs from '@emailjs/browser';
  import './contact.css'
  
  export default function Contact({contact}) {
    const form = useRef();

    const sendEmail = (e)=>{
      e.preventDefault()

      emailjs.sendForm('service_15wdkoz', 'template_qdjbq8f', form.current, '-NTpPszCYuLXxg974')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      

    }

    return (
      <Container ref={contact}  id="contact" bg={useColorModeValue("white","gray.800")} maxW="full" mt={0} centerContent overflow="hidden">
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
                <div class="form-container">
                  <form ref={form} onSubmit={sendEmail} id="contact-form">
                    <div class="form-group">
                      <label for="name">Name:</label>
                      <input type="text" id="name" name="user_name" required/>
                    </div>
                    <div class="form-group">
                      <label for="email">Email:</label>
                      <input type="email" id="email" name="user_email" required/>
                    </div>
                    <div class="form-group">
                      <label for="message">Message:</label>
                      <textarea id="message" name="message" required></textarea>
                    </div>
                    <div class="form-group">
                      <input type="submit" value="Send" id="button" />
                    </div>
                  </form>
                </div>
                <WrapItem>
                  
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }

