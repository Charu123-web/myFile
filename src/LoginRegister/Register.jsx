import React from 'react';
import './LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import loginLink from'./LoginRegister.jsx';
import { useState } from "react";
import  './LoginRegister.jsx';
import {BrowserRouter,Route,Router,Routes, useNavigate} from "react-router-dom";

const Register = () => {
   
    const[action,setAction] = useState('');
    
    const nav = useNavigate();

    const registerLink = () => {
        setAction('active');
         
        };

return (
   
    <div className={'wrapper${action}'}>
<div className="form-box register ">

<form action="">
    <h3>Registration</h3>
    <div className="input-box">
        <input type="text" 
        placeholder='Username' required/>
        <FaUser className='icon' />

    </div>
    <div className="input-box">
        <input type="email" 
        placeholder='Email' required/>
        <FaEnvelope className='icon' />
    </div>
    <div className="remember-forgot">
        <label><input type="checkbox"/>
        I agree to terms and conditions
        </label>
        

    </div>
    <button type="submit">Register</button>

    <div className="login-link">
        <p>Already have an account? 
            <a href= "#" onClick={() => nav("/loginregister")}>Login</a>
        </p>

    </div>

</form>

</div>
</div>

);
};

export default Register
