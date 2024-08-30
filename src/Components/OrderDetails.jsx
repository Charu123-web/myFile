import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderDetails.css';

const OrderDetails = () => {
  const location = useLocation();
  const { cartItems, grandTotal } = location.state || { cartItems: [], grandTotal: 0 };

  return (
    <div>
      <h3>Order Details</h3>
      <h4>Your order has been placed !!!</h4>
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
      <p></p>
      <h5>Delivery Address: Middleton Bae, Ldn</h5>
    </div>
  );
};

export default OrderDetails;
