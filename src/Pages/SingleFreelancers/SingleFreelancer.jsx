
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDataSingle } from '../../Redux/ProductData/action';
import { Avatar, Box, Button, ButtonGroup, Flex, Grid, Heading, IconButton, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { SinglePage } from '../SinglePage/Singlepage';
export const SingleFreelancer = () => {
    const { loading, data, error } = useSelector((state) => state.Data);
  const dispatch = useDispatch();
  const { id } = useParams();

  const filterdata = useMemo(() => {
    return data;
  }, [data]);

  useEffect(() => {
    getDataSingle(dispatch, id);
  }, []);
  return (
    <Grid templateColumns='repeat(2,1fr)' ml={"0px"}>
    <Box
    position={"fixed"}
    left={"20px"}
    maxW={'370px'}
    w={'full'}
    minH={"650px"}
    mt={"80px"}
    bg={useColorModeValue('white', 'gray.800')}
    boxShadow={'2xl'}
    rounded={'md'}
    overflow={'hidden'} key={ filterdata.id}>
    <Image
      h={'300px'}
      w={'full'}
      src={ filterdata.imageurl}
      objectFit="cover"
      alt="#"
    />
    <Flex justify={'center'} mt={-12}>
      <Avatar
        size={'3xl'}
        src={  filterdata.AuthorImg}
        css={{
          border: '2px solid white',
        }}
      />
    </Flex>

    <Box p={6}>
      <Stack spacing={0} align={'center'} mb={5}>
        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
         { filterdata.Author}
        </Heading>
        <Text color={'gray.500'}>UI/UX Designer</Text>
      </Stack>

      <Stack direction={'row'} justify={'center'} spacing={6}>
        <Stack spacing={0} align={'center'}>
          <Text fontWeight={600}>{ filterdata.likes}</Text>
          <Text fontSize={'sm'} color={'gray.500'}>
          Likes
          </Text>
        </Stack>
        <Stack spacing={0} align={'center'}>
          <Text fontWeight={600}>{ filterdata.view}</Text>
          <Text fontSize={'sm'} color={'gray.500'}>
            Followers
          </Text>
        </Stack>
      </Stack>

      <Stack mt={8} direction={'row'} spacing={4}>
        <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          _focus={{
            bg: 'gray.200',
          }}>
          Hire
        </Button>
        <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'blue.400'}
          color={'white'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{
            bg: 'blue.500',
          }}
          _focus={{
            bg: 'blue.500',
          }}
          // onClick={handlecount}
          >
          Follow
        </Button>
      </Stack>
    </Box>
  </Box>
  <Box className='partsf' >
  <SinglePage/></Box>
  </Grid>
  )
}
