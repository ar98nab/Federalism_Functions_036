import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivateRouter = ({children}) => {
    const {user,error}=useSelector((state)=>state.user)
   if(user!=null){
      return children
   }
   else{
    return <Navigate to='/LogIn'/>
   }
 
}
