import { Box, Select } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Recom() {
    const [text,setText]=useState([])

  return (
    <>
     <Box style={{ display: 'flex', alignItems: 'center' }}>
              <span >10,000+ Assets</span>
    </Box>
            <Box>
              <Select placeholder="Recommended" borderRadius="50px">
                <option value="option1">Most Views</option>
                <option value="option2">Most Appreciated</option>
              </Select>
            </Box>
    </>
        
   
  )
}
