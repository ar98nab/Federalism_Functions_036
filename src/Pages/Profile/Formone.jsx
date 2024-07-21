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

export const Formone = ({form,handlechange}) => {
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
          <FormLabel htmlFor="name" fontWeight={'Bold'}>
            Author Name
          </FormLabel>
          <Input id="name" name='Author' onChange={handlechange} placeholder="Enter Name" ref={inputref} required/>
        </FormControl>
      <FormControl mt="2%">
        <FormLabel htmlFor="title" fontWeight={'Bold'}>
         Page Title
        </FormLabel>
        <Input id="title" name='title' onChange={handlechange} type="text" placeholder='Enter Page Title' required />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="loaction" fontWeight={'Bold'} mt="2%">
          Location
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={'text'}
            placeholder="Enter Location"
            name='location' onChange={handlechange}
            required
          />
          <InputRightElement width="4.5rem">
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  )
}