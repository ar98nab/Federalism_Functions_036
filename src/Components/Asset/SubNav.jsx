import { Box, Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function SubNav() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  useEffect(() => {
    setText('Browse Assets');
    setText2('Find the perfect asset for your next project');
    setText3('Image by ');
  }, []);

  return (
    <Container
      bgImage="url('https://a5.behance.net/4488426882b47e70e924be8095a3f691ca759c7f/img/assets_discovery/category-all/assets-header.jpg')"
      bgSize="cover"
      bgPosition="center"
      boxSizing="border-box"
      minW="100%"
    >
      <Container
        h="30vh"
        minW="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
       
      >
        <Box textAlign="center" color="white">
          <Box>
            <h1 style={{ fontSize: '60px', margin: '5px' }}>{text}</h1>
          </Box>
          <Box style={{ fontSize: '20px' }}>{text2}</Box>
        </Box>
      </Container>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'end',
          color: 'white',
          margin: '10px',
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <img
            src="https://a5.behance.net/4488426882b47e70e924be8095a3f691ca759c7f/img/assets_discovery/category-all/claudia-silva.png"
            alt=""
            style={{ borderRadius: '100%', height: '30px', width: '30px' }}
          ></img>
          &nbsp;
          <p> {text3}</p>&nbsp;
          <a href="http://" style={{ color: 'gray' }}>
            Claudia silva
          </a>
        </Box>
      </Box>
    </Container>
  );
}
