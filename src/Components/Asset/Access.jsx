import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { fetchData } from '../../Redux/Reducer/dataActions';

export default function Access() {
  const { loading, data, error } = useSelector((store) => store.tank);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log('Loading:', loading);
  console.log('Data:', data);
  console.log('Error:', error);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="card-container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px",padding:"10px" }}>
      {Array.isArray(data) &&
        data.map((item) => (
          <Card
            key={item.id}
            imageurl={item.imageurl}
            title={item.title}
            view={item.view}
            price={item.price}
            likes={item.likes}
          />
        ))}
    </div>
  );
}
