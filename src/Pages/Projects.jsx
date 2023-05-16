import { Button, Box,ButtonGroup, Icon, Card, CardBody,Center, CardFooter, Divider, Heading, Image, Stack, Text, SimpleGrid, HStack, Link, useColorModeValue, useColorMode, border } from "@chakra-ui/react";

import {GoProject} from 'react-icons/go'


import {GrReactjs} from 'react-icons/gr'
import {IoLogoCss3,IoLogoNodejs,IoLogoHtml5} from 'react-icons/io'
import{SiMongodb,SiExpress,SiChakraui,SiGithub,SiNetlify,SiJavascript,SiFirebase} from 'react-icons/si'


const ProjectsDetail = [
  {
    id:7,
    title : "Wearex (Ajio.com Clone)",
    desc : 'Wearex: Fashion Forward - Unveiling a Stylish Shopping Experience Inspired by Ajio.com. Discover the Latest Trends, Exclusive Collections, and Irresistible Deals at Wearex. Embrace Your Unique Style with Confidence and Explore a World of Fashion Possibilities. Elevate Your Wardrobe with Premium Clothing',
    imageDay : 'https://i.postimg.cc/JhtzdL9t/wearexday.png',
    imageNight : 'https://i.postimg.cc/fRpGDQVV/wearexnight.png',
    github : 'https://github.com/sarimkhan208/kindhearted-afternoon-7542',
    liveDemo:'https://wearex.vercel.app/',
    icons : [
              {icon:GrReactjs , iconName:'React' , iconColor:'#80DEEA' },
              {icon:IoLogoHtml5 , iconName:'HTML' , iconColor:'#E65100' },
              {icon:IoLogoCss3 , iconName:'CSS' , iconColor:'#0277BD' },
              {icon:SiJavascript , iconName:'JavaScript' , iconColor:'#FFD600' },
              {icon:SiChakraui , iconName:'Chakra UI' , iconColor:'#4DB6AC' }
            ]

  },
  {
    id:6,
    title : "Diamond Lane (Caratlane clone)",
    desc : 'Diamond Lane: Unleashing the Brilliance of Fine Diamond Jewellery - Inspired by CaratLane. Discover a World of Exquisite Designs and Timeless Elegance at Diamond Lane. Indulge in the Beauty and Sparkle of Diamonds, Crafted to Perfection',
    imageDay : 'https://i.postimg.cc/7ZD3rcrH/mobile.png',
    imageNight : 'https://i.postimg.cc/7ZD3rcrH/mobile.png',
    github : 'https://github.com/tambeaditya101/abounding-kittens-4324',
    liveDemo:'https://caratlane.vercel.app/',
    icons : [
              {icon:GrReactjs , iconName:'ReactJS' , iconColor:'#80DEEA' },
              {icon:SiChakraui , iconName:'Chakra UI' , iconColor:'#4DB6AC' },
              {icon: SiMongodb, iconName:'MongoDB' , iconColor:'#589636' },
              {icon:SiExpress , iconName:'Express' , iconColor:'#00153E' },
              {icon: IoLogoNodejs, iconName:'NodeJS' , iconColor:'#388E3C' },
            ]

  },
  {
    id:5,
    title : "Online Voting System",
    desc : 'eVote: Empowering Democracy with Secure Online Voting - Revolutionizing the Voting Experience for a Digital Era. Engage in Transparent and Convenient Voting with our Cutting-edge Online Voting System.',
    imageDay : 'https://i.postimg.cc/YC7nhpvC/mobile.png',
    imageNight : 'https://i.postimg.cc/YC7nhpvC/mobile.png',
    github : 'https://github.com/sarimkhan208/online-voting-system',
    liveDemo:'https://online-voting-system-1bvlv6qtg-sarimkhan208.vercel.app/',
    icons : [
              {icon:GrReactjs , iconName:'ReactJS' , iconColor:'#80DEEA' },
              {icon:SiChakraui , iconName:'Chakra UI' , iconColor:'#4DB6AC' },
              {icon: SiMongodb, iconName:'MongoDB' , iconColor:'#589636' },
              {icon:SiExpress , iconName:'Express' , iconColor:'#00153E' },
              {icon: IoLogoNodejs, iconName:'NodeJS' , iconColor:'#388E3C' },
            ]

  },
  {
    id:4,
    title : "Chalo Ghume (Expedia.com clone)",
    desc : 'Chalo Ghume: Your Ultimate Travel Companion - Unveiling a World of Travel Possibilities with Expedia Group Cloned Platform',
    imageDay : 'https://i.postimg.cc/ZqDGB6JQ/mobile-1.png',
    imageNight : 'https://i.postimg.cc/X70TCj0n/mobile-2.png',
    github : 'https://github.com/kumkumdutta/interesting-stretch-8935',
    liveDemo:'https://interesting-stretch-8935.vercel.app/',
    icons : [
          {icon:IoLogoHtml5 , iconName:'HTML' , iconColor:'#E65100' },
          {icon:SiJavascript , iconName:'JavaScript' , iconColor:'#FFD600' },
          {icon:SiChakraui , iconName:'JSON Server' , iconColor:'#673AB7' },
          {icon:GrReactjs , iconName:'ReactJS' , iconColor:'#80DEEA' },
          {icon:SiFirebase , iconName:'Firebase' , iconColor:'#FFCA28' },
          
        ]

  },
  {
    id:3,
    title : "Marvel Studios",
    desc : 'Marvel Studios: Assemble Your Superhero Universe - Embrace the Power of Creation and Explore a Multiverse of Superheroes. Join the Epic Journey of Building Your Own Hero and Discover the Marvelous Creations of Others.',
    imageDay : 'https://i.postimg.cc/yYtM7PBB/index.png',
    imageNight : 'https://i.postimg.cc/yYtM7PBB/index.png',
    github : 'https://github.com/sarimkhan208/Full-Stack-Marvel_project',
    liveDemo:'https://marvel-sable.vercel.app/',
    icons : [
          {icon:GrReactjs , iconName:'ReactJS' , iconColor:'#80DEEA' },
          {icon:SiChakraui , iconName:'Chakra UI' , iconColor:'#4DB6AC' },
          {icon: SiMongodb, iconName:'MongoDB' , iconColor:'#589636' },
          {icon:SiExpress , iconName:'Express' , iconColor:'#00153E' },
          {icon: IoLogoNodejs, iconName:'NodeJS' , iconColor:'#388E3C' },
        ]

  },
  {
    id:2,
    title : "Crafts Bazaar (Craftsvilla.com Clone)",
    desc : 'CraftBazaar: Unleashing Artistry and Creativity - Inspired by Craftsvilla. Explore a World of Handcrafted Treasures and Unique Artisanal Creations at CraftBazaar. Immerse Yourself in the Richness of Craftsmanship and Discover Extraordinary Pieces of Art.',
    imageDay : 'https://i.postimg.cc/Jh7PfTqs/crafvilladay.png',
    imageNight : 'https://i.postimg.cc/Jh7PfTqs/crafvilladay.png',
    github : 'https://github.com/Kirti180/crabby-whistle-3208',
    liveDemo:'https://genuine-bavarois-d93c8f.netlify.app/',
    icons : [
              {icon:IoLogoHtml5 , iconName:'HTML' , iconColor:'#E65100' },
              {icon:IoLogoCss3 , iconName:'CSS' , iconColor:'#0277BD' },
              {icon:SiJavascript , iconName:'JavaScript' , iconColor:'#FFD600' },
              {icon:SiChakraui , iconName:'JSON Server' , iconColor:'#673AB7' }
            ]

  },
  {
    id:1,
    title : "Eify Beauty (Nykaa.com Clone)",
    desc : '"Eify Beauty: Unveiling the Essence of Glamour - Inspired by Nykaa.com. Discover a World of Beauty and Skincare at Eify Beauty. Embrace Your Inner Glow with a Range of Premium Cosmetics, Skincare Essentials, and Beauty Accessories. Enhance Your Style with Confidence and Unleash the Power of Eify Beauty.',
    imageDay : 'https://i.postimg.cc/xdqLGB53/eifyday.png',
    imageNight : 'https://i.postimg.cc/7hq692Dr/eifynight.png',
    github : 'https://github.com/sarimkhan208/obtainable-tongue-3381',
    liveDemo:'https://thunderous-mousse-e34bf3.netlify.app/',
    icons : [
              {icon:IoLogoHtml5 , iconName:'HTML' , iconColor:'#E65100' },
              {icon:IoLogoCss3 , iconName:'CSS' , iconColor:'#0277BD' },
              {icon:SiJavascript , iconName:'JavaScript' , iconColor:'#FFD600' }
            ]

  }
]



export default function Projects({project}){

  const techStack = useColorModeValue('black','white')
  const colorMode = useColorModeValue('red','blue')

  const buttonBgGithub = useColorModeValue('linear(to-r,black,black)','linear(to-r, teal.400,blue.400)')
  const titleColor = useColorModeValue('black','#BDBDBD')

  const buttonBgLive = useColorModeValue('linear(to-r, #388E3C,#66BB6A)','linear(to-r, red.500, yellow.500)')

  //hover
  const buttonBgHoverGithub = useColorModeValue('white','#388E3C')
  const buttonColorHoverGithub = useColorModeValue('black','white')
  const buttonBorderColorHoverGithub = useColorModeValue('black','#388E3C')


  const buttonBgHoverLive = useColorModeValue('#388E3C','red.500')
  const buttonColorHoverLive = useColorModeValue('white','white')
  
  // console.log("projext")

  return <Box width={'80%'}  margin={'auto'} mt={'50px'} id='projects' ref={project} >
    <Heading mb='20px' display={'flex'} justifyContent='center' alignItems={'center'} gap='10px' ><Icon as={GoProject}/><Text>Projects</Text></Heading>
    <SimpleGrid   gridTemplateColumns={{base:'repeat(1,1fr)',sm:'repeat(2,1fr)'}} gap={'40px'} >
      {
        ProjectsDetail.map((el)=>( 
    <Center  > <Box key={el.id} className="project-card" > <Card  width={{base:'95%',sm:'95%'}} box-shadow= 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
    >
  <CardBody>
    <Image
      src={colorMode==='red'?el.imageDay:el.imageNight}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading className="project-title"  textAlign={'left'} ml={'8px'} size='md' color={titleColor} >{el.title}</Heading>
      <Text textAlign={'left'}  pl={'8px'} className="project-description" >
        {
          el.desc
        }
      </Text>
    </Stack>
    <Text textAlign={'left'} m={'15px'}  fontWeight={'bold'} className="project-tech-stack" >Tech Stack</Text>
    <HStack>
      <SimpleGrid gridTemplateColumns={{base:'repeat(3,1fr)',sm:'repeat(5,1fr)'}} gap={'15px'} >
        {
          el.icons.map((element)=>(
            <Box>
              <Icon 
              width={{base:'40px',sm:'65px'}} 
              color={element.iconColor} 
              fontSize={{base:'21px',sm:'25px'}} 
              as={element.icon}>
              </Icon>
              <Box color={techStack}  fontSize={{base:'12px',sm:'12px'}}>{element.iconName}</Box>
              </Box>
          ))
        }
      </SimpleGrid>      
    </HStack>

  </CardBody>
  <CardFooter margin={'auto'} >
    <ButtonGroup spacing={5} >
      <Button className="project-github-link" color={'white'} bgGradient={buttonBgGithub} 
      _hover={{bg:`${buttonBgHoverGithub}`,
      color : `${buttonColorHoverGithub}`,
      border : `2px solid ${buttonBorderColorHoverGithub}`,
      fontWeight:'700',
     
    }}>
        <Link _hover={{textDecoration:'none'}} href={el.github} isExternal ><Icon as={SiGithub} mr={'3px'} /> Github</Link> 
      </Button>
      <Button 
      className="project-deployed-link"
      _hover={{bg:`${buttonBgHoverLive}`,
      color : `${buttonColorHoverLive}`,
      fontWeight:'700',
     
    }} color={'white'} bgGradient={buttonBgLive}  >
        <Link _hover={{textDecoration:'none'}}   href={el.liveDemo} isExternal ><Icon as={SiNetlify} mr={'3px'} /> Live Demo </Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
  </Card></Box></Center>
        ))
      }
  </SimpleGrid> </Box>
}


//box-shadow= rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

