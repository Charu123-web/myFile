import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginRegister from './LoginRegister/LoginRegister';
import Register from './LoginRegister/Register';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import RestaurantList from './Components/RestaurantList';
import FoodItemsPage from './Components/FoodItems';
import Layout from './App';
import CartDetails from './Components/CartDetails';
import OrderDetails from './Components/OrderDetails';
import Header from './Components/Header';
import Profile from './Components/Profile'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Layout>
    <Routes>

          <Route path ="/" element={<LoginRegister />} />
    
    
          <Route  path="/register" element={<Register/>}/>

          <Route  path="/loginregister" element={<LoginRegister/>}/>
            
          <Route  path="/restaurants" element={<RestaurantList/>}/>

          <Route path="/restaurants/:id" element={<FoodItemsPage />} />     

          <Route path="/cartdetails" element={<CartDetails />} />

          <Route path="/orderdetails" element={<OrderDetails />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>
        </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
