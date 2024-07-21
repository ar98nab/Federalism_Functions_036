
import { Box } from '@chakra-ui/react';
import React from 'react';

export default function ImageHome({url}) {

  return (
    <div>
      <Box
        padding="4"
      
        color="black"
      
        height="100vh" // Ensures the Box takes the full viewport height
        style={{
          backgroundImage: `url(${url})`, // Using template literals to include the variable
          backgroundSize: 'cover', // Ensures the background image covers the Box
          backgroundPosition: 'center', // Centers the background image
          backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
        }}
      >
        
      </Box>
    </div>
  );
}
