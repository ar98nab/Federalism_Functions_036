import React from 'react';

const Card = ({ id, imageurl, title, view, price, likes }) => {
  console.log('Rendering Card:', { id, imageurl, title, view, price, likes });
  

  return (
    <div className="card" style={{ height: 'auto', width: '300px' }}>
      <div
        style={{
          backgroundImage: `url(${imageurl})`,
          height: '200px',
          width: '100%',
        }}
      >
        {/* <img
          src={imageurl}
          alt={title}
          style={{ height: '200px', width: '100%' }}
        /> */}
        <div
          style={{
            margin: '10px',
            borderRadius: '10px',
            height: '50px',
            width: '80px',
            padding: '15px',
            textAlign: 'center',
            color: 'white',
            backgroundColor: 'blue',
          }}
        >
          <span class="material-symbols-outlined">shopping_cart</span>
         
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <div>
          <span
            className="card-title"
            style={{ display: 'block', fontWeight: 'bold' }}
          >
            {title}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
          }}
        >
          <div
            className="card-view"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <span class="material-symbols-outlined">visibility</span>
            <span style={{ fontWeight: 'bold' }}> {view}</span>
          </div>
          <div
            className="card-like"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span class="material-symbols-outlined">thumb_up</span>{' '}
            <span style={{ fontWeight: 'bold' }}>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card; // Ensure this is the default export
