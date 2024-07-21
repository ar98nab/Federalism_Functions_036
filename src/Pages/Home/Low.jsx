import { Box, Container,Text } from '@chakra-ui/react'
import React from 'react'

export default function Low() {
  return (
    <Container maxW="100%"  bgColor="black" fontFamily='acumin-pro", "Acumin Pro", "Helvetica Neue", Helvetica, Arial, sans-serif'>
         <hr />
        <Box
            maxW="100%"
            
            bgColor="black"
            display="flex"
            justifyContent="space-around"
            color="white"
            h="15vh"
          >
           
            <Box
              display="flex"
              justifyContent="space-around"
              gap="20px"
              margin="auto"
            >
              <img
                src="\src\assets\adobe.png"
                alt="Logo"
                height="10px"
                width="30px"
                
              />
              <Box display="flex"
              justifyContent="space-around"
              gap="20px"
              margin="auto">
              <Text>Adobe</Text>
              <Text> © 2024 Adobe Inc. All rights reserved.</Text>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-around"
              gap="20px"
              margin="auto"
            >
              <Text>English</Text>
              <Text>TOU</Text>
              <Text>Privacy</Text>
              <Text>Community</Text>
              <Text>Cookie preferences</Text>
              <Text>Do not sell or share my personal information</Text>
            </Box>
          </Box>


    </Container>
  )
}
