import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  Container,
  Stack,
  useColorModeValue,
  useToast,
  Heading,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import bgImage from '../../assets/behanceBg.avif';
import { Link, useNavigate } from 'react-router-dom';
import { login } from './userActions';

const LogIn = () => {
  const bgColor = useColorModeValue('white', 'gray.900');
  const inputBgColor = useColorModeValue('white', 'gray.700');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);
  const toast = useToast();
  const navigate=useNavigate() 
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login(email, password, () => {
        toast({
          title: 'Logged in successfully.',
          description: 'Welcome back!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      })
    );
    navigate("/")
  };

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      bg={`url(${bgImage}) no-repeat center/cover`}
      display="flex"
      alignItems="center"
      justifyContent="right"
      mx="auto"
      p={4}
    >
      <Container
        maxW={{ base: '90%', md: '70%', lg: '50%' }}
        py={4}
        px={8}
        bg={bgColor}
        rounded="md"
        boxShadow="xl"
        textAlign="left"
        width="400px"
        height="500px"
      >
        <Stack spacing={6}>
          <Heading color={useColorModeValue('black', 'white')}>
            Log in to your account
          </Heading>
          <Box w="full">
            <form onSubmit={handleSubmit}>
              <FormControl id="email" mb={4} isRequired>
                <FormLabel color={useColorModeValue('black', 'white')}>
                  Email address
                </FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  bg={inputBgColor}
                  color={useColorModeValue('black', 'white')}
                />
              </FormControl>
              <FormControl id="password" mb={4} isRequired>
                <FormLabel color={useColorModeValue('black', 'white')}>
                  Password
                </FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  bg={inputBgColor}
                  color={useColorModeValue('black', 'white')}
                />
              </FormControl>
              <Button type="submit" width="full" mt={4} colorScheme="blue">
                Log in
              </Button>
            </form>
            {error && (
              <Text color="red.500" mt={2}>
                {error}
              </Text>
            )}
          </Box>
        </Stack>
        <Text mt={4} color={useColorModeValue('black', 'white')}>
          Don't have an account?{' '}
          <Button as={Link} to="/SignUp" variant="link" colorScheme="blue">
            Sign up
          </Button>
        </Text>
      </Container>
    </Box>
  );
};

export default LogIn;
