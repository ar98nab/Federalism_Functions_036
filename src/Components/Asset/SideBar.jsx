import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  FormControl,
  Input,
  Radio,
  Stack,
} from '@chakra-ui/react';

import React from 'react';

export default function SideBar() {
  return (
    <div >
      <Accordion defaultIndex={[0]} allowMultiple >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                <Box as="span" flex="1" textAlign="left">
                  <Box display="flex" alignItems="center" gap="10px">
                    <span class="material-symbols-outlined">category</span>

                    <span>Categories</span>
                  </Box>
                </Box>
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack>
              <Radio size="md" name="1" colorScheme="green">
                All categories
              </Radio>
              <Radio size="md" name="1" colorScheme="green">
                Fonts
              </Radio>
              <Radio size="md" name="1" colorScheme="green">
                Templates
              </Radio>
              <Radio size="md" name="1" colorScheme="green">
                Vectors
              </Radio>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                <Box as="span" flex="1" textAlign="left">
                  <Box display="flex" alignItems="center" gap="10px">
                    <span class="material-symbols-outlined">
                      category_search
                    </span>

                    <span>File Extension</span>
                  </Box>
                </Box>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={4}>
            <Box>
              <FormControl isRequired>
                <Input placeholder="Search File Extension...." />
              </FormControl>
            </Box>
            <Stack spacing={[1, 15]} direction={['column']} ml="15px">
              <Checkbox size="md" colorScheme="green" defaultChecked>
                PDF
              </Checkbox>
              <Checkbox size="md" colorScheme="green" defaultChecked>
                JPG
              </Checkbox>
              <Checkbox size="md" colorScheme="green" defaultChecked>
                PNG
              </Checkbox>
              <Checkbox size="md" colorScheme="green" defaultChecked>
                PSD
              </Checkbox>
              <Checkbox size="md" colorScheme="green" defaultChecked>
                GIF
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                <Box display="flex" alignItems="center" gap="10px">
                  <span class="material-symbols-outlined">sell</span>

                  <span>price</span>
                </Box>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack>
              <Button colorScheme="blue" borderRadius="50px">
               All
              </Button>
              <Button colorScheme="blue" borderRadius="50px">
              Free
              </Button>
              <Button colorScheme="blue" borderRadius="50px">
                Premium
              </Button>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
