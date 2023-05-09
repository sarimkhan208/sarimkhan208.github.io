import { SimpleGrid ,Box, Card,CardBody,CardHeader,Heading,Text,CardFooter,
    Button } from "@chakra-ui/react";
    
    import {BsHourglassSplit} from 'react-icons/bs'
    import {ImStackoverflow} from 'react-icons/im'
    import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
    import{VscProject} from 'react-icons/vsc'
    import { useColorModeValue } from "@chakra-ui/react";
    export default function Achievements(){

        return <Box width='80%' mt="20px" margin='auto' >
            <SimpleGrid spacing={20} templateColumns={{base:'repeat(1, 100%)' , sm:'repeat(2, 45%)'}}>
        <Card>
          <CardHeader>
            <Box color={useColorModeValue('teal.500','orange.500')}  size='33px' as={BsHourglassSplit} />
            <Heading textAlign='left' size='4xl' bgClip='text' bgGradient={useColorModeValue('linear(to-r, teal.400,blue.400)', 'linear(to-r, red.500, yellow.500)')} > 1200+</Heading>
          </CardHeader>
          <CardBody>
            <Text textAlign='left'  color={useColorModeValue('gray.500' , 'gray.200')} fontWeight='500' >1200+ hours of focused coding, endless possibilities - my portfolio of algorithmic accomplishments and growth.</Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Box size='33px' color={useColorModeValue('teal.500','orange.500')}  as={ImStackoverflow} />
            <Heading textAlign='left' size='4xl' bgClip='text' bgGradient={useColorModeValue('linear(to-r, teal.400,blue.400)', 'linear(to-r, red.500, yellow.500)')} > 700+ DSA</Heading>
          </CardHeader>
          <CardBody>
            <Text textAlign='left' color={useColorModeValue('gray.500' , 'gray.200')} fontWeight='500' >700+ problems solved and still hungry for more - my portfolio of algorithmic conquests.</Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Box color={useColorModeValue('teal.500','orange.500')}  size='33px' as={AiOutlineFundProjectionScreen} />
            <Heading textAlign='left' size='2xl' height={'73%'} bgClip='text' bgGradient={useColorModeValue('linear(to-r, teal.400,blue.400)', 'linear(to-r, red.500, yellow.500)')} >250+ Assignments</Heading>
          </CardHeader>
          <CardBody>
            <Text textAlign='left' color={useColorModeValue('gray.500' , 'gray.200')} fontWeight='500' >250+ coding assignments has been finished including HTML, CSS, JavaScript, React and many more tech stack used.</Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Box color={useColorModeValue('teal.500','orange.500')}  size='33px' as={VscProject} />
            <Heading height={'70%'} textAlign='left' size='2xl' bgClip='text' bgGradient={useColorModeValue('linear(to-r, teal.400,blue.400)', 'linear(to-r, red.500, yellow.500)')} >7+ Projects</Heading>
          </CardHeader>
          <CardBody>
            <Text textAlign='left' color={useColorModeValue('gray.500' , 'gray.200')} fontWeight='500' >7+ major prjoects has been done containing individual as well as collabrative</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
        </Box>
    }