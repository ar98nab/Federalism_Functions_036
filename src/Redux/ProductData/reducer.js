import React from 'react'
import { Data, Loading, states } from './actiontype'

export const reducer = (state=states,{type,payload}) => {
  switch (type) {
    case Loading:
        return ({...state,loading:true})
    case Data:
        return ({...state,
            data:payload,loading:false
        }) 
    case Error:
        return ({...state,error:true,loading:false})
    default:
       return state
  }
}
