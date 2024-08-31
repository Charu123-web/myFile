import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.svg'; // Adjust path if necessary
import './App.css'; // Make sure to include the CSS file

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <Link to="/">
          <img src={logo} className="layout-logo" alt="logo" />
        </Link>
        <h1 className="layout-title">EazyBite</h1>
      </header>
      <main className="layout-main">
        {children}
      </main>
    </div>
  );
};

export default Layout;
