import { useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
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
import { Formone } from './Formone'
import { Formtwo } from './Formtwo'
import axios from 'axios'
import { useDispatch } from 'react-redux'
const initial={
    "id": Math.random(),
    "imageurl": "",
    "imageurlone": [],
    "title": "",
    "AuthorImg": "",
    "Author": "",
    "location": "",
    "likes": "0",
    "view": "0"
  }

  export const Profile = () => {
    const [form, setForm] = useState(initial)
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(50)
    const toast = useToast()
  
const handlechange=(e)=>{
    const {name}=e.target
      let value=e.target.value
      setForm((prev)=>{
        return {...prev,[name]:value}
      })
}


    const handleSubmit = (e) => {
        e.preventDefault();
        try {
          axios.post('http://localhost:3000/productdata', form);
          toast({
            title: 'Profile created.',
            description: "Your profile has been successfully created.",
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          setStep(1);
          setProgress(50);
        } catch (error) {
          toast({
            title: 'An error occurred.',
            description: "Unable to create profile.",
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        }
      };
    
  
    return (
      <div style={{background:"Brown",height:"100vh"}}>
        <Box
          position={'relative'}
          top={"80px"}
          borderWidth="1px"
          rounded="lg"
          background={"white"}
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={800}
          p={6}
          m="10px auto"
          as="form">
          <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
          {step === 1 ? <Formone form={form} handlechange={handlechange} setForm={setForm} /> : <Formtwo form={form} handlechange={handlechange} setForm={setForm} />}
          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between" ml={"100px"}>
              <Flex>
                <Button
                  onClick={() => {
                    setStep(step - 1)
                    setProgress(progress - 50)
                  }}
                  isDisabled={step === 1}
                  colorScheme="teal"
                  variant="solid"
                  w="7rem"
                  mr="5%"
                  >
                  Back
                </Button>
                <Button
                  w="7rem"
                  onClick={() => {
                    setStep(step + 1)
                  }}
                  isDisabled={step === 2}
                  colorScheme="teal"
                  variant="outline"
                  >
                
                  Next
                </Button>
              </Flex>
              {step === 2 ? (
                <Button
                  w="7rem"
                  colorScheme="red"
                  variant="solid"
                  onClick={handleSubmit}>
                  Submit
                </Button>
              ) : null}
            </Flex>
          </ButtonGroup>
        </Box>
      </div>
    )
  }