import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const Logo = (props) => {
    return (
      <img
        src="\src\assets\logo.jpg"
        alt="Logo"
        height="10px"
        width="100px"
      margin="auto"
      
      />
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithLogoLeft() {
    return (
      <Box
        height="60vh"
        zIndex={2}
        w="100%"
        bgColor="black"
        color="white"
        display="flex"
        flexDirection="column"
       justifyContent="start"
        fontFamily='acumin-pro", "Acumin Pro", "Helvetica Neue", Helvetica, Arial, sans-serif'
      >
        <Container as={Stack} maxW={'7xl'} py={10} bgColor="black"    zIndex={2}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
            spacing={2} // Horizontal spacing between columns
            // Vertical spacing between rows
            mr="10px"
          >
            <Stack spacing={1} color="white" >
              <Box  marginLeft="100px" w="100px">
              <Logo />
              </Box>
            </Stack>
            <Stack align={'flex-start'} spacing={5} borderRadius="1px solid red">
              <ListHeader>Built For Creatives</ListHeader>
              <Box as="a"  href={'https://www.behance.net/pro?tracking_source=footer_static_gallery'}>
                Try Behance Pro 
              </Box>
              <Box as="a" href={'#'}>
                Find Inspiration
              </Box>
              <Box as="a" href={'#'}>
                Get Hired
              </Box>
              <Box as="a" href={'#'}>
                Sell Creative Assets
              </Box>
              <Box as="a" href={'#'}>
                Sell Freelance Services
              </Box>
            </Stack>
            <Stack align={'flex-start'} spacing={5}>
              <ListHeader>Support</ListHeader>
              <Box as="a" href={'https://www.behance.net/joblist?tracking_source=footer_static_gallery'}>
                Help Center
              </Box>
              <Box as="a" href={'#'}>
                Terms of Service
              </Box>
              <Box as="a" href={'#'}>
                Legal
              </Box>
              <Box as="a" href={'#'}>
                Privacy Policy
              </Box>
              <Box as="a" href={'#'}>
                Status
              </Box>
            </Stack>
            <Stack align={'flex-start'} spacing={5}>
              <ListHeader>Behance</ListHeader>
              <Box as="a" href={'https://www.behance.net/about?tracking_source=footer_static_gallery'}>
                About Behance
              </Box>
              <Box as="a" href={'#'}>
                Adobe Portfolio
              </Box>
              <Box as="a" href={'#'}>
                Download the App
              </Box>
              <Box as="a" href={'#'}>
                Blog
              </Box>
              <Box as="a" href={'#'}>
                Careers
              </Box>
              <Box as="a" href={'#'}>
                Help Center
              </Box>
              <Box as="a" href={'#'}>
                Contact Us
              </Box>
            </Stack>
            <Stack align={'flex-start'} spacing={5}>
              <ListHeader>Social</ListHeader>
              <Box as="a" href={'#'}>
                Instagram
              </Box>
              <Box as="a" href={'#'}>
                Twitter
              </Box>
              <Box as="a" href={'#'}>
                Pinterest
              </Box>
              <Box as="a" href={'#'}>
                Facebook
              </Box>
              <Box as="a" href={'#'}>
                LinkedIn
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  