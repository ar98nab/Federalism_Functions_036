import { useState, useContext, useEffect, useRef } from "react";
import { searchContext } from "../../Context/SearchContext/SearchContext"; 
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const Searchbar = ({ onSearch }) => {
  const { search, setSearch } = useContext(searchContext);
  const inputRef = useRef(null);
  let timeout = useRef(null);

  useEffect(() => {
    inputRef.current.focus();

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  function debounce(operation, delay) {
    return function (...args) {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => {
        operation(...args);
      }, delay);
    };
  }

  const debouncedHandleSearch = debounce(handleSearch, 1000);

  function handleSearch(e) {
   
      setSearch(e.target.value);
    
  }
   console.log(search);
  return (
    <div>
      <InputGroup borderRadius={5} size="sm">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input
          w={"550px"}
          mr={"50px"}
          borderRadius={"280px"}
          type="text"
          placeholder="Search..."
          border="1px solid #949494"
          onChange={(e) => debouncedHandleSearch(e)}
          ref={inputRef}
        />
      </InputGroup>
    </div>
  );
};
