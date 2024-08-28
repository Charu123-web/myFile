import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginRegister from './LoginRegister/LoginRegister';
import Register from './LoginRegister/Register';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

    <Route path ="/" element={<App />}>
    </Route>
    
    
          <Route  path="/register" element={<Register/>}/>

          <Route  path="/loginregister" element={<LoginRegister/>}/>
            
          
         
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
