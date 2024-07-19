import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Product } from '../../Pages/Product/Product'
import { SinglePage } from '../../Pages/SinglePage/Singlepage'


export const Allrouter = () => {
  return (
     <Routes>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<SinglePage/>}/>
     </Routes>
  )
}
