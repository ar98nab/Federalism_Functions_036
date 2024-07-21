import React, { useContext, useEffect, useState } from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    flexbox,
    Grid,
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../Redux/ProductData/action'
import { searchContext } from '../../Context/SearchContext/SearchContext'
import { NavLink } from 'react-router-dom'

export const SingleOwner = () => {
//   const [follow,setfollow]=useState(0)
const { search, setSearch } = useContext(searchContext);
  const [limit,setLimit]=useState(80)
  const select = useSelector((state) => state.Data);
  const dispatch = useDispatch();
    useEffect(() => {
      getData(dispatch,limit)
     }, [limit]);
   
     
//    const handlecount=(key)=>{
//      const prev=select.data.filter((ele)=>{
//         return ele.id==key
//       }).map((ele)=>{return ele.view})
//       setfollow(prev+1)
//    }
let filteredData = search.length === 0 ? select.data : select.data.filter((ele) =>  ele.Author.includes(search));


  return (
    <Box m={"20px"} mt={"90px"}>
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
  {
  filteredData && filteredData.map((ele)=>{
    return (<NavLink to={`/freelancers/${ele.id}`}> <Box
      maxW={'270px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'} key={ele.id}>
      <Image
        h={'120px'}
        w={'full'}
        src={ele.imageurl}
        objectFit="cover"
        alt="#"
      />
      <Flex justify={'center'} mt={-12}>
        <Avatar
          size={'xl'}
          src={ ele.AuthorImg}
          css={{
            border: '2px solid white',
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={'center'} mb={5}>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
           {ele.Author}
          </Heading>
          <Text color={'gray.500'}>UI/UX Designer</Text>
        </Stack>

        <Stack direction={'row'} justify={'center'} spacing={6}>
          <Stack spacing={0} align={'center'}>
            <Text fontWeight={600}>{ele.likes}</Text>
            <Text fontSize={'sm'} color={'gray.500'}>
            Likes
            </Text>
          </Stack>
          <Stack spacing={0} align={'center'}>
            <Text fontWeight={600}>{ele.view}</Text>
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
    </Box></NavLink>
)
}
)
}
  </Grid></Box>
  )
}