import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function Profile() {
  return (
    <Box style={{marginTop:"20px"}} >
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        // variant="outline"
        boxShadow="none"
        
      >
        <Box>
          <Image
            objectFit="cover"
            height="50px"
            width="50px"
            mt="20px"
            ml="10px"
            borderRadius="100%"
            maxW={{ base: '100%', sm: '200px' }}
            src="https://mir-s3-cdn-cf.behance.net/user/100/2f0f011272723445.641018b0e64a0.jpg"
            alt="Caffe Latte"
          />
        </Box>

        <Stack>
          <CardBody>
            <Heading size="md">Harley-Davidson UX/UI</Heading>

            <Text py="2">Tonic Black •
                <span>Follow</span>
            </Text>
           
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
}
