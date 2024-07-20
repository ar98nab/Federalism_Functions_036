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
import { Link } from 'react-router-dom';
import { signedUp } from './userActions';

const SignUp = () => {
  const bgColor = useColorModeValue('white', 'gray.900');
  const inputBgColor = useColorModeValue('white', 'gray.700');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      toast({
        title: 'Invalid password.',
        description:
          'Password must be at least 6 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: 'Passwords do not match.',
        description: 'Please ensure both passwords match.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    dispatch(
      signedUp(email, password, () => {
        toast({
          title: 'Signed up successfully.',
          description: 'Your account has been created.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      })
    );
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
        py={10}
        px={20}
        bg={bgColor}
        rounded="md"
        boxShadow="xl"
        textAlign="left"
        width="400px"
        height="600px"
      >
        <Stack spacing={6}>
          <Heading color={useColorModeValue('black', 'white')}>
            Create an account
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
              <FormControl id="confirmPassword" mb={4} isRequired>
                <FormLabel color={useColorModeValue('black', 'white')}>
                  Confirm Password
                </FormLabel>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  bg={inputBgColor}
                  color={useColorModeValue('black', 'white')}
                />
              </FormControl>
              <Button type="submit" width="full" mt={4} colorScheme="blue">
                Sign up
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
          Already have an account?{' '}
          <Button as={Link} to="/Login" variant="link" colorScheme="blue">
            Sign in
          </Button>
        </Text>
      </Container>
    </Box>
  );
};

export default SignUp;
