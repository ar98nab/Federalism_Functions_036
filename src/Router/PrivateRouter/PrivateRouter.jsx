import React from 'react'
import { useSelector } from 'react-redux'

export const PrivateRouter = ({children}) => {
    const {user,error}=useSelector((state)=>state.user)
   if(typeof user=='object'){
      return children
   }
   else{
    return <Navigate to='/LogIn'/>
   }
 
}
