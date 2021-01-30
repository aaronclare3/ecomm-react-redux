import React from 'react'
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>E-Comm</h1>   
            <i className="fas fa-shopping-cart"></i>
            <span className="user-icon"><i className="fas fa-user"></i></span>
        </div>
    )
}

export default Navbar
