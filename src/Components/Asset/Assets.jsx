import { Box, Container, Select } from '@chakra-ui/react';
import React from 'react';
import Search from './Search';
import SideBar from './SideBar';
import SubNav from './SubNav';
import Access from './Access';
import Recom from './Recom';

export default function Assets() {
  return (
    <Container minW="100%">
      <Container minW="100%">
        <SubNav />
      </Container>
      <Container
        style={{ display: 'grid', gridTemplateColumns: '25% 75%' }}
        minW="100%"
      >
        <Container style={{ height:"750px",position:"static" }}>
          <Search />
          <SideBar />
        </Container>
        <Container  minW="100%">
          <Box
            style={{
              
              display: 'flex',
              justifyContent: 'space-around',
              gap: '700px',
             
             
            }}
            minW="100%"
          >
           <Recom/>
          </Box>

          <Box  minW="100%">
            <Access/>
          </Box>
        </Container>
      </Container>
    </Container>
  );
}
