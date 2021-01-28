import React from 'react'
import Searchbar from './Searchbar';
import './styles/Navbar.css';

const Navbar = ({getList, products}) => {
    return (
        <div>
            <div className="navbar-black">
                <div>
                    <h4>E-Comm     
                    <i className="fas fa-shopping-cart"></i>
                    </h4>
                </div>
                <div></div>
                <div className="end-nav"><i className="fas fa-user"></i></div>
            </div>
            <div className="navbar-white">
                <Searchbar getList={getList} products={products}/>
            </div>
        </div>
    )
}

export default Navbar