import { Box, Container, Select, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

export default function Main() {
  return (
    <>
      <Container>
        <Container>
          <SimpleGrid columns={2} spacingX="60%" spacingY="20px">
            <Box
              
              height="80px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              
            >
              <Text style={{ padding: '10px' }}>10,000+Assets</Text>
            </Box>
            <Box
              
              height="70px"
              borderRadius="50px"
              w="auto" // Adjusted width to auto
              padding="10px" // Adjusted padding
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
           
                
              <Select  w="100px" mr="100px" borderRadius="50px" h="40px">
              <option value="option1" >Recommended</option>
                <option value="option2">Most Viewed</option>

                <option value="option3">Most Appreciated</option>
              </Select>
            </Box>
          </SimpleGrid>
        </Container>
        <Container>
          <Box>
            
          </Box>
        </Container>
      </Container>
    </>
  );
}
