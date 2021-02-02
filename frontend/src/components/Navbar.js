import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ screen }) => {
  return (
    <div className='navbar'>
      <h1>E-Comm</h1>
      <Link to='/cart'>
        <i className='fas fa-shopping-cart'></i>
      </Link>
      <span className='user-icon'>
        <Link to=''>
          <i className='fas fa-user'></i>
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
