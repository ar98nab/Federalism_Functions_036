import React, { useEffect } from 'react';
import {
  Button,
  useToast,
  Box,
  Image,
  Text,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Switch,
  RadioGroup,
  Radio,
  Select,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export const HireToast = () => {
  const { data } = useSelector((state) => state.Data);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = React.useState('freelance');

  const showToast = () => {
    if (data && data.AuthorImg && data.Author) {
      toast({
        duration: null,
        isClosable: true,
        render: () => (
          <Box
            m={3}
            color="white"
            p={3}
            bg="gray.500"
            borderRadius="md"
            display="flex"
            alignItems="center"
          >
            <Image
              borderRadius="full"
              boxSize="50px"
              src={data.AuthorImg}
              alt="Author image"
              mr={3}
            />
            <Stack spacing={1}>
              <Text fontWeight="bold">{data.Author}</Text>
              <Text>Availability: Now • Responds quickly</Text>
              <Button
                size="sm"
                color="black"
                bg="white"
                onClick={() => {
                  onOpen();
                  toast.closeAll();
                }}
              >
                Hire
              </Button>
            </Stack>
          </Box>
        ),
      });
    }
  };

  useEffect(() => {
    if (data && data.AuthorImg && data.Author) {
      showToast();
    }
  }, [data]);

  
  const handleclick=()=>{
    toast({
      position:'top',
      isClosable:true,
      title: 'Thank You ! Message Sent Successfully',
      containerStyle: {
        border: '30px solid green',
      },
    })
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="black" />
        <ModalContent>
          <ModalHeader>Hire Resauce Studio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" alignItems="center" mb={4}>
              <Image
                borderRadius="full"
                boxSize="50px"
                src={data ? data.AuthorImg : ''}
                alt="image"
                mr={3}
              />
              <Stack spacing={1}>
                <Text fontWeight="bold">{data ? data.Author : ''}</Text>
              </Stack>
            </Box>

            <FormControl mb={4}>
              <FormLabel>Your Message</FormLabel>
              <Textarea placeholder="Enter here" />
            </FormControl>

            <FormControl display="flex" alignItems="center" mb={4}>
              <Switch id="hire-switch" defaultChecked pr={2} />
              <FormLabel htmlFor="hire-switch" mb="0">
                I'm interested in hiring Resauce Studio
              </FormLabel>
            </FormControl>

            <RadioGroup onChange={setValue} value={value} mb={4}>
              <Stack direction="row">
                <Radio value="freelance">Freelance</Radio>
                <Radio value="full-time">Full-Time</Radio>
              </Stack>
            </RadioGroup>

            <FormControl mb={4}>
              <FormLabel>Your Timeline</FormLabel>
              <Select placeholder="Select option">
                <option value="now">Now</option>
                <option value="next-few-weeks">
                  Within the next few weeks
                </option>
                <option value="next-month">Within the next month</option>
                <option value="flexible">Flexible</option>
              </Select>
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Your Budget</FormLabel>
              <Input placeholder="USD - $" />
            </FormControl>

            <FormControl display="flex" alignItems="center">
              <Switch id="behance-review" defaultChecked />
              <FormLabel htmlFor="behance-review" mb="0" ml={2}>
                Allow Behance to review my inquiry to help me find candidates.{' '}
                <a href="#learn-more">Learn More</a>
              </FormLabel>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleclick} width="100%">
              Send Message
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
