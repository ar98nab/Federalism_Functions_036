import axios from "axios"
import { Data, Error, Loading, url } from "./actiontype"

export const AddLoading=()=>{
    return {type:Loading}
}
export const AddData=(products)=>{
    return {type:Data,payload:products}
}
export const AddError=()=>{
    return {type:Error}
}



export const getData=async (dispatch,limit)=>{
      dispatch(AddLoading())
    axios.get(`http://localhost:3000/productdata?_limit=${limit}`).then((res)=>{
       dispatch(AddData(res.data))
    }).catch((err)=>{
      dispatch(AddError())
    })
}


export const getDataSingle=async (dispatch,id)=>{
    dispatch(AddLoading())
  axios.get(`http://localhost:3000/productdata/${id}`).then((res)=>{
     dispatch(AddData(res.data))
  }).catch((err)=>{
    dispatch(AddError())
  })
}