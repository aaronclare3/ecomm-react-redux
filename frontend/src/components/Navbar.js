import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const calcTotalItems = () => {
    return cartItems.length;
  };

  return (
    <div className='navbar'>
      <h1>E-Comm</h1>
      <Link to='/cart'>
        <p className='cart-amt'>{calcTotalItems()}</p>
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
