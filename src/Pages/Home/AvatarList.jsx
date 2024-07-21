import { Avatar, Box, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

export default function AvatarList() {
  return (
    <Wrap direction="column" spacing={6}>
      <Box>
        <WrapItem>
          <Box position="relative" display="inline-block">
            <Avatar
              name="Dan Abrahmov"
              src="https://mir-s3-cdn-cf.behance.net/user/100/2f0f011272723445.641018b0e64a0.jpg"
            />
            <Box
              position="absolute"
              bottom="0"
              right="0"
              transform="translate(20%, 20%)"
              bg="blue.500"
              w="20px"
              borderRadius="full"
              p="2"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="lg"
              color="white"
              cursor="pointer"
              h="20px"
              _hover={{ bg: "blue.600", transform: "translate(20%, 20%) scale(1.1)" }}
              transition="all 0.3s ease"
            >
              +
            </Box>
          </Box>
        </WrapItem>
        <Text>Follow</Text>
      </Box>
      <Box>
        <WrapItem ml="10px">
          <Box
            _hover={{ color: 'blue.500' }}
            transition="color 0.3s ease"
          >
            <span className="material-symbols-outlined">mail</span>
          </Box>
        </WrapItem>
        <Text ml="10px">Hire</Text>
      </Box>
      <Box>
        <WrapItem ml="10px">
          <Box
            _hover={{ color: 'blue.500' }}
            transition="color 0.3s ease"
          >
            <span className="material-symbols-outlined">handyman</span>
          </Box>
        </WrapItem>
        <Text ml="10px">Tools</Text>
      </Box>
      <Box>
        <WrapItem ml="10px">
          <Box
            _hover={{ color: 'blue.500' }}
            transition="color 0.3s ease"
          >
            <span className="material-symbols-outlined">folder_open</span>
          </Box>
        </WrapItem>
        <Text ml="10px">Save</Text>
      </Box>
      <Box>
        <WrapItem ml="10px">
          <Box
            _hover={{ color: 'blue.500' }}
            transition="color 0.3s ease"
          >
            <span className="material-symbols-outlined">ios_share</span>
          </Box>
        </WrapItem>
        <Text ml="10px">Share</Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="full"
        bg="blue.500"
        p="2"
        width="50px" // Adjust width to make it circular
        height="50px" // Adjust height to make it circular
      >
        <WrapItem>
          <Box
            _hover={{ color: 'blue.300' }}
            transition="color 0.3s ease"
          >
            <span className="material-symbols-outlined" style={{ color: 'white' }}>thumb_up</span>
          </Box>
        </WrapItem>
      </Box>
    </Wrap>
  );
}
