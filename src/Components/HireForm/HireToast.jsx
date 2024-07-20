import React, { useEffect } from 'react';
import { Button, useToast, Box, Image, Text, Stack } from '@chakra-ui/react';

const HireToast = () => {
  const toast = useToast();

  useEffect(() => {
    const handleScroll = () => {
      toast({
        duration: 9000,
        isClosable: true,
        render: () => (
          <Box
            m={3}
            color="white"
            p={3}
            bg="blue.500"
            borderRadius="md"
            display="flex"
            alignItems="center"
          >
            <Image
              borderRadius="full"
              boxSize="50px"
              src="https://via.placeholder.com/50"
              alt="Placeholder image"
              mr={3}
            />
            <Stack spacing={1}>
              <Text fontWeight="bold">Account created.</Text>
              <Text>We've created your account for you.</Text>
              <Button
                size="sm"
                colorScheme="green"
                onClick={() => console.log('Button clicked!')}
              >
                Go to Dashboard
              </Button>
            </Stack>
          </Box>
        ),
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toast]);

  return (
    <Button
      onClick={() =>
        toast({
          duration: 9000,
          isClosable: true,
          render: () => (
            <Box
              m={3}
              color="white"
              p={3}
              bg="blue.500"
              borderRadius="md"
              display="flex"
              alignItems="center"
            >
              <Image
                borderRadius="full"
                boxSize="50px"
                src="https://via.placeholder.com/50"
                alt="Placeholder image"
                mr={3}
              />
              <Stack spacing={1}>
                <Text fontWeight="bold">Account created.</Text>
                <Text>We've created your account for you.</Text>
                <Button
                  size="sm"
                  colorScheme="green"
                  onClick={() => console.log('Button clicked!')}
                >
                  Go to Dashboard
                </Button>
              </Stack>
            </Box>
          ),
        })
      }
    >
      Show Toast
    </Button>
  );
};

export default HireToast;
