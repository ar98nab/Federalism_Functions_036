import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Upload = ({unique}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [url,seturl]=useState("")
    const toast=useToast()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const {loading,data,error}=useSelector((state)=>state.Data)

    const handlechange=(e)=>{
        seturl(e.target.value)
    }
   
    const handleupload= (e)=>{
       e.preventDefault()
       try{
        let updatedProductdata = {
            ...data,
            imageurlone: [...data.imageurlone, url] 
          };

          console.log(updatedProductdata);

        axios.patch(`http://localhost:3000/productdata/${unique}`, updatedProductdata);

       }
       catch (error) {
        toast({
          title: 'An error occurred.',
          description: "Unable to save", 
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    }
  
    return (
      <>
         <button  className='upload' onClick={onOpen}>Upload</button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Upload Your Work</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Upload Image URL</FormLabel>
                <Input ref={initialRef} placeholder='Image URL' onChange={handlechange} />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleupload}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
