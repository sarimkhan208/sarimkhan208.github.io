import { SimpleGrid ,Box, Card,CardBody,CardHeader,Heading,Text,Icon} from "@chakra-ui/react";

import {FaTools} from 'react-icons/fa'
import {TbBrandVscode} from 'react-icons/tb'
import {GoMarkGithub} from 'react-icons/go'
import {SiReplit} from 'react-icons/si'
import {TbBrandNpm} from 'react-icons/tb'
import {SiNetlify} from 'react-icons/si'
import {TbBrandVercel} from 'react-icons/tb'
import {AiOutlineCodeSandbox} from 'react-icons/ai'
import {FiCodepen} from 'react-icons/fi'
import {BsGit} from 'react-icons/bs'
import { Link } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";



export default function ToolSets(){

    return <Box width={{base:'100%' , sm:"65%"}}  margin='auto' mt="100px" pl="30px">
        <Heading mb='20px' display={'flex'} justifyContent='center' alignItems={'center'} gap='10px' ><Icon as={FaTools}/><Text>Toolsets</Text></Heading>
        <SimpleGrid spacing={7} templateColumns={{base:'repeat(2, 45%)' , sm:'repeat(4, 22%)'}}>
                <Card>
                    <Link href='https://code.visualstudio.com/' isExternal _hover={{textDecoration:'none'}} >    
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px' >
                            <Box color='#29B6F6'   size='80px' as={TbBrandVscode} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} >VS Code</Heading>
                        </CardHeader>
                    </Link>
                </Card>
                <Card>
                    <Link href='https://github.com/' isExternal _hover={{textDecoration:'none'}} >    
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px' >
                            <Box color='#191919'  size='80px' as={GoMarkGithub} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} >Github</Heading>
                        </CardHeader>
                    </Link>
                </Card>
                <Card>
                    <Link href='https://replit.com/' isExternal _hover={{textDecoration:'none'}} >    
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px' >
                            <Box color='#FB8C00'  size='80px' as={SiReplit} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} >Replit</Heading>
                        </CardHeader>
                    </Link>
                </Card>
                <Card>
                    <Link href='https://www.npmjs.com/' isExternal _hover={{textDecoration:'none'}} >    
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px' >
                            <Box color='#D50000'  size='80px' as={TbBrandNpm} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} >NPM</Heading>
                        </CardHeader>
                    </Link>
                </Card>
                <Card>
                    <Link href='https://www.netlify.com/' isExternal _hover={{textDecoration:'none'}} >    
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px' >
                            <Box color='#80DEEA'  size='80px' as={SiNetlify} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} >Netlify</Heading>
                        </CardHeader>
                    </Link>
                </Card>
                <Card>
                    <Link href='https://vercel.com/' isExternal _hover={{textDecoration:'none'}} >    
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px' >
                            <Box color={useColorModeValue('black','white')}  size='80px' as={TbBrandVercel} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} >Vercel</Heading>
                        </CardHeader>
                    </Link>
                </Card>
                <Card>
                    <Link href='http://codesandbox.io/' isExternal _hover={{textDecoration:'none'}} >    
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px' >
                            <Box color={useColorModeValue('black','white')}  size='80px' as={AiOutlineCodeSandbox} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} >CodeSandbox</Heading>
                        </CardHeader>
                    </Link>
                </Card>
                <Card>
                    <Link href='https://codepen.io/' isExternal _hover={{textDecoration:'none'}} >    
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px' >
                            <Box color='#455A64'  size='80px' as={FiCodepen} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} >Code Pen</Heading>
                        </CardHeader>
                    </Link>
                </Card>
                <Card>
                    <Link href='https://git-scm.com/' isExternal _hover={{textDecoration:'none'}} >    
                        <CardHeader _hover={{bgColor:useColorModeValue('teal.500','orange.500'),cursor:'pointer'}}  rounded='10px' >
                            <Box color='#F4511E'  size='80px' as={BsGit} />
                            <Heading mt={4} textAlign='left' fontSize='22px' color={useColorModeValue('black','white')} >Git</Heading>
                        </CardHeader>
                    </Link>
                </Card>
               
        </SimpleGrid>
    </Box>
}