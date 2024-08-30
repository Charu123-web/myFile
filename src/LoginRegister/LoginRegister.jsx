import React from 'react';
import './LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import { useState } from 'react';
import Register from './Register.jsx';
import {BrowserRouter,Route,Router,Switch,Routes} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { BiAlignMiddle } from 'react-icons/bi';


const LoginRegister = () => {

    const [action, setAction]=useState("");

    const navigate= useNavigate();

    const loginLink = () => {
        setAction('active');


         
        };
       

  return (
    <div className={'wrapper${action}'}>
        <div className="form-box login " >
          
            <form action="">
                <h3>Login</h3>
                <div className="input-box">
                    <input type="text" 
                    placeholder='Username' required/>
                    <FaUser className='icon' />

                </div>
                <div className="input-box">
                    <input type="password" 
                    placeholder='Password' required/>
                    <FaLock className='icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>
                    Remember me
                    </label>
                    <a href="#">Forgot password?</a>

                </div>
                <button type="submit" onClick={()=> navigate("/restaurants")}>Login</button>

                <div className="register-link">
                    <p>Don't have an account?
                    <a href= "#" onClick={()=> navigate("/register")}>Register</a>     
                     
                    </p>
                   
                </div>

            </form>
             
        </div>

       
        </div>
  );
};

export default LoginRegister


