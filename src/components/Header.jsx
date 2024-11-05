import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/logo.png" alt="Logo" />
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>
      {/* <div className="cart">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">Login</span>
      </div> */}
    </header>
  );
};

export default Header;
