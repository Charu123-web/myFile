import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const showHeader = location.pathname !== '/loginregister'
                    && location.pathname !== '/' 
                    && location.pathname !== '/register';

  return (
    showHeader && (
      <header className="header">
        <Link to="/" className="home-icon">
          <FaHome />
        </Link>
        <Link to="/profile" className="user-icon">
          <FaUser />
        </Link>
      </header>
    )
  );
};

export default Header;
