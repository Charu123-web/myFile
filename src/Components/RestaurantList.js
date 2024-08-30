import React from 'react';
import Restaurant from './Restaurant';
import restaurants from '../restaurants';
import { useState } from 'react';
import SearchBar from './SearchBar';
import "./Restaurant.css"


const RestaurantList = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const newFilteredRestaurants = restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(lowercasedQuery) ||
      restaurant.location.toLowerCase().includes(lowercasedQuery) ||
      restaurant.menu.some(item => item.toLowerCase().includes(lowercasedQuery))
    );
    setFilteredRestaurants(newFilteredRestaurants);
  };

  return (
    <>
    <div className="restaurant-list-container">
      <h3>Restaurants List</h3>
      <SearchBar onSearch={handleSearch} />
      {filteredRestaurants.map(restaurant => (
        <Restaurant
          key={restaurant.id}
          name={restaurant.name}
          location={restaurant.location}
          rating={restaurant.rating}
          distance={restaurant.distance}
        />
      ))}
    </div>
    

  
    
    </>
  );
};

export default RestaurantList;





