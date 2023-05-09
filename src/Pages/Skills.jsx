import { SimpleGrid ,Box, Card,useColorMode,useColorModeValue ,CardHeader,Heading,Text, Link,Icon} from "@chakra-ui/react";


import {SiRedux} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {GrNode} from 'react-icons/gr'
import {SiMongodb} from 'react-icons/si'
import {SiNextdotjs} from 'react-icons/si'
import {SiChakraui} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {ImHtmlFive} from 'react-icons/im'
import {SiJavascript} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'
import { AiTwotoneSliders } from "react-icons/ai";
import {MdMilitaryTech} from 'react-icons/md'
export default function Skills({skills}){ 
    
    return <Box id="skills" width={{base:'100%' , sm:"65%"}}   margin='auto' mt="50px" padding='auto' pl="30px" ref={skills}  >
        <Heading  mb='20px' display={'flex'} justifyContent='center' alignItems={'center'} gap='10px' ><Icon as={MdMilitaryTech}/><Text>Skills</Text></Heading>
        <SimpleGrid spacing={{base:3,sm:7}} templateColumns={{base:'repeat(2, 45%)' , sm:'repeat(4, 22%)'}}>
                <Card className="skills-card" >
                    
                    <Link href="https://html.com"   isExternal _hover={{textDecoration:'none'}} >
                            <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px' >
                                <Box className="skills-card-img"  color='orange.500'  size='80px' as={ImHtmlFive} />
                                <Heading mt={4}  textAlign='left'  fontSize='22px' color={useColorModeValue('black','white')} className="skills-card-name" >HTML</Heading>
                            </CardHeader>
                    </Link>
                </Card>

                <Card className="skills-card" >
                    <Link href='https://developer.mozilla.org/en-US/docs/Web/CSS' isExternal _hover={{textDecoration:'none'}} >
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px'>
                            <Box className="skills-card-img"  color='blue.500'  size='80px' as={SiCss3} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} className="skills-card-name">CSS</Heading>
                        </CardHeader>
                    </Link>
                </Card>

                <Card className="skills-card" >
                    <Link href='https://www.javascript.com/' isExternal _hover={{textDecoration:'none'}} >
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px'>
                            <Box className="skills-card-img"  color='#FFD600' bgColor={'black'}  size='80px' as={SiJavascript} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} className="skills-card-name"> JavaScript</Heading>
                        </CardHeader>
                    </Link>
                </Card>

                <Card className="skills-card" >
                    <Link href='https://reactjs.org/' isExternal _hover={{textDecoration:'none'}} >
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px'>
                            <Box className="skills-card-img"  color='#80DEEA'  size='80px' as={GrReactjs} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} className="skills-card-name" > React</Heading>
                        </CardHeader>
                    </Link>
                </Card>

                <Card className="skills-card" >
                    <Link href='https://redux.js.org/' isExternal _hover={{textDecoration:'none'}} >
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px'>
                            <Box className="skills-card-img"  color='#7E57C2'  size='80px' as={SiRedux} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} className="skills-card-name" > Redux</Heading>
                        </CardHeader>
                    </Link>
                </Card>

                <Card className="skills-card" >
                    <Link href='https://www.typescriptlang.org/' isExternal _hover={{textDecoration:'none'}} >
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px'>
                            <Box className="skills-card-img"  color='#1976D2'  size='80px' as={SiTypescript} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} className="skills-card-name" >TypeScript</Heading>
                        </CardHeader>
                    </Link>
                </Card>

                <Card className="skills-card" >
                    <Link href='https://nodejs.org/en/' isExternal _hover={{textDecoration:'none'}} >
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px'>
                            <Box className="skills-card-img"  color='#388E3C'  size='80px' as={GrNode} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} className="skills-card-name" >NodeJS</Heading>
                        </CardHeader>
                    </Link>
                </Card>

                <Card className="skills-card" >
                    <Link href='https://www.mongodb.com/' isExternal _hover={{textDecoration:'none'}} >
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px'>
                            <Box className="skills-card-img"  color='#94D82D'  size='80px' as={SiMongodb} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} className="skills-card-name" >MongoDB</Heading>
                        </CardHeader>
                    </Link>
                </Card>

                <Card className="skills-card" >
                    <Link href='https://nextjs.org/' isExternal _hover={{textDecoration:'none'}} >
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px'>
                            <Box className="skills-card-img"  color='#212121'  size='80px' as={SiNextdotjs} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} className="skills-card-name" >NextJS</Heading>
                        </CardHeader>
                    </Link>
                </Card>

                <Card className="skills-card" >
                    <Link href='https://chakra-ui.com/' isExternal _hover={{textDecoration:'none'}} >
                    <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px'>
                        <Box className="skills-card-img"  color='#4DB6AC'  size='80px' as={SiChakraui} />
                        <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} className="skills-card-name" >Chakra UI</Heading>
                    </CardHeader>
                    </Link>
                </Card>

                <Card className="skills-card" >
                    <Link href='https://expressjs.com/' isExternal _hover={{textDecoration:'none'}} >
                    <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px'>
                        <Box className="skills-card-img"  color='#212121'  size='80px' as={SiExpress} />
                        <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} className="skills-card-name" >ExpressJS</Heading>
                    </CardHeader>
                    </Link>
                </Card>
                <Card className="skills-card" >
                    <Link href='https://getbootstrap.com/' isExternal _hover={{textDecoration:'none'}} >
                    <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px'>
                        <Box className="skills-card-img"  color='#673AB7'  size='80px' as={BsFillBootstrapFill} />
                        <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} className="skills-card-name" >Bootstrap</Heading>
                    </CardHeader>
                    </Link>
                </Card>
        </SimpleGrid>
    </Box>
}