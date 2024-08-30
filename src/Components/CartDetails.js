import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CartDetails.css';

const CartDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = location.state || { cartItems: [] };

  const grandTotal = cartItems.reduce((acc, item) => acc + item.total, 0);

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handlePlaceOrder = () => {
    navigate('/orderdetails', { state: { cartItems, grandTotal } });
  };

  return (
    <div>
      <h3>Cart Details</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>₹{item.price}</td>
              <td>₹{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Grand Total: ₹{grandTotal}</h4>
      <div className="cart-buttons">
        <button className="back-button" onClick={handleBack}>Back</button>
        <button className="place-order-button" onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default CartDetails;
