
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Product } from '../../Pages/Product/Product'
import { SinglePage } from '../../Pages/SinglePage/Singlepage'
import { Home } from '../../Pages/Home/Home'
import SignUp from '../../Redux/Authentication/SignUp';
import LogIn from '../../Redux/Authentication/LogIn';

export const Allrouter = () => {
  return (
     <Routes>
        <Route path="/" element={<Home/>}/>
 <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<SinglePage/>}/>
     </Routes>
  )
}

