import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Product } from '../../Pages/Product/Product';
import { SinglePage } from '../../Pages/SinglePage/Singlepage';
import { Home } from '../../Pages/Home/Home';
import SignUp from '../../Redux/Authentication/SignUp';
import LogIn from '../../Redux/Authentication/LogIn';
import { SingleOwner } from '../../Pages/Freelancers/Freelancers';
import { SingleFreelancer } from '../../Pages/SingleFreelancers/SingleFreelancer';
import { Profile } from '../../Pages/Profile/Profile';
import { PrivateRouter } from '../PrivateRouter/PrivateRouter';


export const Allrouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/product" element={
        <PrivateRouter>
        <Product />
        </PrivateRouter>
        } />
      <Route path="/product/:id" element={
        <PrivateRouter>
        <SinglePage />
        </PrivateRouter>
      }/>
      <Route path="/freelancers" element={
        <PrivateRouter>
        <SingleOwner />
        </PrivateRouter>
        } />
      <Route path="/freelancers/:id" element={
       <PrivateRouter> 
        <SingleFreelancer />
        </PrivateRouter>
        } />
      <Route path="/registration" element={
        <PrivateRouter>
        <Profile />
        </PrivateRouter>
        } />
      <Route path="*" element={<h1 style={{position:'absolute',top:"300px",left:"42%",fontSize:"xxx-large",fontWeight:"bolder"}}>404 ERROR</h1>} />
    </Routes>
  );
};
