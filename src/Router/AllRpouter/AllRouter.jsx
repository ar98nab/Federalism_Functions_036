import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Product } from '../../Pages/Product/Product'
import { SinglePage } from '../../Pages/SinglePage/Singlepage'
import { Home } from '../../Pages/Home/Home'


export const Allrouter = () => {
  return (
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<SinglePage/>}/>
     </Routes>
  )
}
