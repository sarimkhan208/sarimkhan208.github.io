
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    Stack,
    Heading,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  
  import {FcAbout} from 'react-icons/fc'
  import { AiFillHome , AiTwotoneSliders } from 'react-icons/ai'
  import {GoProject} from 'react-icons/go'
  import {RiContactsBookLine} from 'react-icons/ri'
  import {TiDownload} from 'react-icons/ti'
  import { MoonIcon, SunIcon } from '@chakra-ui/icons';
  import { useContext, useEffect } from 'react';
  import { ScrollContext } from '../Context/ScrollContext';
  
  import sarim from "./Mohd-Sarim-Khan-Resume.pdf"
  
  const NavLink = ({ children }) => (
  
    <Link
    
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        color:'white',
        fontWeight:'500'
      }}
      >
      {children}
      
    </Link>
  );
              // <Button
              //   leftIcon={< TiDownload/>}
              //   onClick={() => {
              //     window.open(
              //       "https://drive.google.com/file/d/1gN9UPDmCgVRsJSttOCI56jzYLNhEjY7c/view"
              //     );
              //     // downloadFile();
              //   }}
              //   bg="none"
              //   px={2}
              //   py={1}
              //   rounded={"md"}
              //   _hover={{
              //     textDecoration: "none",
              //     bg: useColorModeValue("gray.200", "gray.700"),
              //     color: "white",
              //   }}
              //   className="nav-link resume"
              //   id="resume-button-1"
              // >
              //   <a id="resume-link-1" href={sarim} download={"Mohd-Sarim-Khan-Resume"}>   Resume </a>
              
              // </Button>
  export default function Navbar({about,skills,project,home,contact}) {
  
      const {scrollRef,setScrollRef} = useContext(ScrollContext)
  
      const handleClick = (ref) => {
        setScrollRef(ref);
        ref.current.scrollIntoView({ behavior: "smooth" });
      };
      
      
  
      const { isOpen, onOpen, onClose } = useDisclosure();
      const { colorMode, toggleColorMode } = useColorMode();
  
      const navbarBgGradient = useColorModeValue('linear(to-r, teal.400,blue.400)','linear(to-r, gray.900,gray.900)')
      const navbarColor = useColorModeValue('black','#FF9800')
      
      const hamburgerColor = useColorModeValue("teal:500",'black.500')
      const toggleColor = useColorModeValue('blue.400','gray.900')

      function downloadFile() {
        let link = document.createElement("a");
        link.download = "Mohd-Sarim-Khan-Resume.pdf";
        link.href = sarim;
        link.click();
        link.remove();
      }
      useEffect(()=>{
        scrollRef?.current.scrollIntoView({
          behaviour:'smooth'
        })
      },[scrollRef])
    return (
      <>
        <Box id='nav-menu' position={"fixed"} zIndex="5" bgGradient={navbarBgGradient} color={navbarColor} px={4} width={'100%'}>
          <Flex h={16} alignItems={'center'}  justifyContent={'space-between'}>
            <IconButton
              bg={hamburgerColor}
              _hover={{bgColor:useColorModeValue('blue.400,gray.900')}}
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
            {/* <Box>Logo</Box> */}
              <HStack
                // as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
               
                <NavLink ><Flex className="nav-link home" onClick={()=>handleClick(home)} > <Box as={AiFillHome} mt={1} mr={1.5}  />Home</Flex></NavLink>
                <NavLink><Flex className='nav-link about' onClick={()=>handleClick(about)}  > <Box as={FcAbout} mt={1} mr={1.5}/> About me </Flex></NavLink>
                <NavLink><Flex className="nav-link skills" onClick={()=>handleClick(skills)}> <Box as={AiTwotoneSliders} mt={1} mr={1.5}/> Skills </Flex></NavLink>
                <NavLink><Flex className="nav-link projects" onClick={()=>handleClick(project)} > <Box as={GoProject} mt={1} mr={1.5}  /> Projects </Flex></NavLink>
                <NavLink><Flex className="nav-link contact" onClick={()=>handleClick(contact)} > <Box as={RiContactsBookLine} mt={1} mr={1.5}/> Contact </Flex></NavLink>
                <NavLink><Button
                  leftIcon={< TiDownload/>}
                  onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1j0YQaNI8UdgvEcJKiHyv0C59Mx2stS3t/view?usp=sharing"
                  );
                  // downloadFile();
                }}
                bg="none"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                  color: "white",
                }}
                className="nav-link resume"
                id="resume-button-1"
              >
                <a id="resume-link-1" href={sarim} download={"Mohd-Sarim-Khan-Resume"}>   Resume </a>
              
              </Button>
                </NavLink>
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
                <Button onClick={toggleColorMode} bg={toggleColor} _hover={{bg:toggleColor}} >
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                
                
                
                <NavLink><Flex onClick={()=>handleClick(home)} > <Box as={AiFillHome} mt={1} mr={1.5} ml='45%' /> Home </Flex></NavLink>
                <NavLink><Flex onClick={()=>handleClick(about)} > <Box as={FcAbout} mt={1} mr={1.5} ml='45%' /> About me </Flex></NavLink>
                <NavLink><Flex onClick={()=>handleClick(skills)}>  <Box as={AiTwotoneSliders} mt={1} mr={1.5} ml='45%' /> Skills </Flex></NavLink>
                <NavLink><Flex onClick={()=>handleClick(project)} > <Box as={GoProject} mt={1} mr={1.5} ml='45%' /> Projects </Flex></NavLink>
                <NavLink><Flex> <Box as={RiContactsBookLine} mt={1} mr={1.5} ml='45%' /> Contact </Flex></NavLink>
                <NavLink><Flex onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1gN9UPDmCgVRsJSttOCI56jzYLNhEjY7c/view"
                    );
                    downloadFile();
                  }} > <Box  as={TiDownload} mt={1} mr={1.5} ml='45%' /> Resume </Flex></NavLink>
              </Stack>
            </Box>
          ) : null}
        </Box>      
      </>
    );
  }