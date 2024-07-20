// src/components/Access.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions/dataActions';
import Card from '../Reducer/Card';



export default function Access() {
  const { loading, data, error } = useSelector((store) => store);
  const dispatch = useDispatch();
consol.log(data)
  useEffect(() => {
     fetchData(dispatch);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="card-container">
      {data.map((item) => (
        <Card
          key={item.id} 
          imageurl={item.imageurl} 
          title={item.title} 
          view={item.view} 
          price={item.price} 
          like={item.like}
        />
      ))}
    </div>
  );
}
