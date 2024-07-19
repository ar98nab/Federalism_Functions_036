import axios from "axios";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDataSingle } from "../../Redux/ProductData/action";
import { CloseButton, useToast } from "@chakra-ui/react";

export const SinglePage = () => {
  const { loading, data, error } = useSelector((state) => state.Data);
  console.log(data);
  const dispatch = useDispatch();
  const { id } = useParams();
  const toast = useToast();

const filterdata=useMemo(()=>{
     return data
},[data])

  useEffect(() => {
    getDataSingle(dispatch, id);
  }, []);

  return (
    <div className="single">
      <img className="singleimg" src={filterdata.imageurl} alt="" />
      <img className="singleimg" src={filterdata.imageurlone} alt="" />
      <img className="singleimg" src={filterdata.imageurltwo} alt="" />
      <img className="singleimg" src={filterdata.imageurlthree} alt="" />
      <div>
        {toast({
          title: `${filterdata.Author} is  available for hire`,
          description: "Availablity:Available within next few days",
          isClosable: true,
        })}
      </div>
    </div>
  );
};
