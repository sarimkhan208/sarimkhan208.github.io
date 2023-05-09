
import { Box , Text,Center, useColorModeValue } from "@chakra-ui/react"

export default function Footer(){
    console.log("footer")
    return <Box width='100%'
                height='70px'
                bgGradient={useColorModeValue('linear(to-r, teal.400,blue.400)','linear(to-r, gray.900,gray.900)')}
                display={'flex'}
                justifyContent='center'
     >
        <Center>
            <Text fontFamily={'monospace'} >Coded with 💚 by Sarim Khan</Text>
        </Center>
    </Box>
}