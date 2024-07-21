import { useEffect, useRef, useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

export const Formtwo = ({form,handlechange}) => {
  const [show, setShow] = useState(false)
  const inputref=useRef()
  useEffect(()=>{
    inputref.current.focus()
  },[])
  const handleClick = () => setShow(!show)
  return (
    <Box className='Formone' >
      <Heading w="100%" textAlign={'center'} fontWeight="Bolder" mb="2%">
        User Registration
      </Heading>
        <FormControl mr="5%">
          <FormLabel htmlFor="ProfilePic" fontWeight={'Bold'}>
          Upload Profile Picture
          </FormLabel>
          <Input id="dp" name='AuthorImg' onChange={handlechange} placeholder="Upload Profile Picture" ref={inputref} required/>
        </FormControl>
      <FormControl mt="2%">
        <FormLabel htmlFor="work" fontWeight={'Bold'}>
         Upload Image
        </FormLabel>
        <Input id="work" name='imageurl' onChange={handlechange} type="text" placeholder='Upload Your Work' required/>
      </FormControl>

    </Box>
  )
}