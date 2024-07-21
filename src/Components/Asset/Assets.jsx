import React from 'react'
import SubNav from './SubNav'
import { Container, grid } from '@chakra-ui/react'
import Search from './Search'
import SideBar from './SideBar'

export default function Assets() {
  return (
    <Container  minW="100%">
        <Container minW="100%">
              <SubNav/>
        </Container>
        <Container  style={{display:"grid",gridTemplateColumns:"25% 75%"}} minW="100%">
            <Container style={{border:"1px solid"}}>
              <Search/>
              <SideBar/>
            </Container>
            <Container style={{border:"1px solid"}} minW="100%">
           
            </Container>
        </Container>
    </Container>
  )
}
