import React, { useContext, useEffect, useState } from 'react';
import { states } from '../../Redux/ProductData/actiontype';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../Redux/ProductData/action';
import { ViewIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { searchContext } from '../../Context/SearchContext/SearchContext';
import LargeWithLogoLeft from '../Home/LargeWithLogoLeft';
import Low from '../Home/Low';

export const Product = () => {
  const { search, setSearch } = useContext(searchContext);
  const [limit, setLimit] = useState(80);
  const { loading, data, error } = useSelector((state) => state.Data);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getData);
  }, []);

  
  let filteredData = Array.isArray(data) ? data : [];

  if (search.length > 0) {
    filteredData = filteredData.filter(
      (ele) => ele.title.includes(search) || ele.Author.includes(search)
    );
  }

 

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
    <>
      <div className="product">
        {loading && <h2>Loading...</h2>}
        {error && <h2>Error</h2>}
        {filteredData &&
          filteredData.map((ele) => {
            return (
              <NavLink to={`/product/${ele.id}`} key={ele.id} className="card">
                <div className="image-container">
                  <img src={ele.imageurl} alt={ele.title} className="image" />
                  <div className="title-overlay">
                    <h2>{ele.title}</h2>
                  </div>
                </div>
                <div className="lowerpart">
                  <NavLink to={`/freelancers/${ele.id}`} className="title">
                    {ele.Author}
                  </NavLink>
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
      <LargeWithLogoLeft />
      <Low />
    </>
  );
};
