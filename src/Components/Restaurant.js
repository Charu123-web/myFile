import React from 'react';

const Restaurant = ({ name, location, rating, menu }) => {
  return (
    <div className="restaurant">
      <h2>{name}</h2>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Rating:</strong> {rating} ⭐</p>
      <p><strong>Menu:</strong> {menu.join(', ')}</p>
    </div>
  );
};

export default Restaurant;
