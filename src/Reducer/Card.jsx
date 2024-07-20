
import React from 'react';

const Card = ({ id, imageurl, title, view, price,like }) => {
    
    return (
        <div className="card">
            <img src={imageurl} alt={title} className="card-image" />
            <h2 className="card-title">{title}</h2>
            <p className="card-view">Views: {view}</p>
            <p className="card-like">like: {like}</p>
            <p className="card-price">Price: ${price}</p>
        </div>
    );
};

export default Card;
