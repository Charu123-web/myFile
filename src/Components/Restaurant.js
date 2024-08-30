
import React from 'react';
import { Link } from 'react-router-dom';
import "./Restaurant.css"

const Restaurant = ({ id, name, location, rating, distance }) => {
  return (
    <div className="restaurant">
      <div className="restaurant-header">
        <Link to={`/restaurants/${id}`}>
          <h2>{name}</h2>
        </Link>
        <p className="restaurant-location">{location}</p>
      </div>
      <div className="restaurant-details">
        <p><strong>Rating:</strong> {rating} ⭐</p>
        <p><strong>Distance:</strong> {distance}</p>
      </div>
    </div>
  );
};

export default Restaurant;