import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function Search() {
  return (
    <InputGroup style={{ margin: "10px", width: "90%" }}>
      <InputLeftElement 
        style={{ 
          padding: "10px", // Adjust padding to ensure no overlap
        }}
      >
        <SearchIcon color="gray.500" />
      </InputLeftElement>
      <Input
        type="search"
        variant="outline"
        size="lg"
        placeholder="Search Assets..."
        paddingLeft="50px" // Ensure there's space for the icon
        style={{ 
          height: "40px", 
          width: "100%", 
          borderRadius: "50px" 
        }}
      />
    </InputGroup>
  );
}
