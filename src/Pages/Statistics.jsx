import { Box,Heading,Icon,Text,Image,Center} from "@chakra-ui/react";
import {FcStatistics} from 'react-icons/fc'
export default function Statistics(){

    return (
      <Box width={'70%'} margin='auto' mt={'30px'} >
      <Heading mb='20px' display={'flex'} justifyContent='center' alignItems={'center'} gap='10px' ><Icon as={FcStatistics}/><Text>Statistics</Text></Heading>
        <Center >
            <Image id="github-streak-stats" margin={'25px'} src='https://github-readme-streak-stats.herokuapp.com?user=sarimkhan208&_border=true&theme=dark&hide_border=true&theme=react' alt="Github Streak" />
        </Center>
        <Center  >
            <Image id="github-top-langs" margin={'25px'} src="https://github-readme-stats.vercel.app/api/top-langs/?username=sarimkhan208&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true" alt="Github top languages" />
        </Center>
        <Center >
            <Image id="github-stats-card"  margin={'25px'} src="https://github-readme-stats.vercel.app/api?username=sarimkhan208&theme=react&border_radius=4.6&hide_border=true&layout=compact&show_icons=true" alt="Github Stats Cards" />
        </Center>
        <Center>
            <Image margin={'25px'} src="https://github-readme-activity-graph.cyclic.app/graph?username=sarimkhan208&theme=react-dark&hide_border=true" alt="Github Stats" />
        </Center>
      </Box>
      );
    };

    











