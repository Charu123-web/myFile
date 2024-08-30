import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import restaurants from '../restaurants';
import items from '../items';
import './FoodItemsPage.css';

const FoodItemsPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [itemQuantities, setItemQuantities] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurant = () => {
      const foundRestaurant = restaurants.find(r => r.id === parseInt(id));
      setRestaurant(foundRestaurant);
    };
    fetchRestaurant();
  }, [id]);

  useEffect(() => {
    const initialQuantities = items.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {});
    setItemQuantities(initialQuantities);
  }, []);

  const handleQuantityChange = (itemId, change) => {
    setItemQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: Math.max(0, prevQuantities[itemId] + change),
    }));
  };
const handleCheckout = () => {
  const cartItems = items
      .filter(item => itemQuantities[item.id] > 0)
      .map(item => ({
        ...item,
        quantity: itemQuantities[item.id],
        total: item.price * itemQuantities[item.id]
      }));

    navigate('/cartdetails', { state: { cartItems } });
  };

  return (
    <div>
      <h3>{restaurant ? restaurant.name : 'The Gourmet Kitchen'}</h3>
      <h4>Food Items:</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>{item.rating} ⭐</td>
              <td>{item.category}</td>
              <td>{itemQuantities[item.id]}</td>
              <td>
                <button onClick={() => handleQuantityChange(item.id, 1)}>Add</button>
                <button onClick={() => handleQuantityChange(item.id, -1)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="checkout-button" onClick={handleCheckout}>Go To Cart</button>
    </div>
  );
};

export default FoodItemsPage;
