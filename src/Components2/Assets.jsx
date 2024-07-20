import React from 'react'
import SubNav from './SubNav'

import Search from './Search'
import Categories from './Categories'
import Main from './Main'


export default function Assets() {
  return (
    <div border="10px solid red">
        <div>
              <SubNav/>
        </div>
        <div  style={{display:"grid",gridTemplateColumns:"25% 75%"}}>
            <div >
              <Search/>
              <Categories/>
            
            </div>
            <div style={{border:"1px solid"}}>
           <Main/>
            </div>
        </div>
    </div>
  )
}
