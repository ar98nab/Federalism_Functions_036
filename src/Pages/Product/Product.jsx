import React, { useEffect, useState } from "react";
import { states } from "../../Redux/ProductData/actiontype";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/ProductData/action";
import { ViewIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export const Product = () => {
  const [limit,setLimit]=useState(80)
  const { loading, data, error } = useSelector((state) => state.Data);
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
   getData(dispatch,limit)
  }, [limit]);

  // const handlescroll=()=>{
  //   if(window.innerHeight+window.scrollY>=document.body.offsetHeight){
  //     setLimit((prev)=>prev+8)
  //  }
  // }

  // useEffect(()=>{
  //   window.addEventListener("scroll", () => {
  //     handlescroll()
  // })
  // })

  return (
    <div className="product">
      {loading && <h2>Loading...</h2>}
      {error &&  <h2>Error</h2>}
      {data.map((ele) => {
        return (
          <NavLink to ={`/product/${ele.id}`} key={ele.id} className="card">
            <img className="image" src={ele.imageurl} alt="" />
            <div className="lowerpart">
              <div className="title">{ele.title}</div>
              <div className="rightpart">
                <span class="material-symbols-outlined">thumb_up</span>
                <span className="likes">{ele.likes}</span>
                <ViewIcon />
                <span className="likes">{ele.view}</span>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};
