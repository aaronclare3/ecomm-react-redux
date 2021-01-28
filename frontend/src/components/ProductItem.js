import React from 'react'
import {Link} from 'react-router-dom';
import './styles/ProductItem.css'

const ProductItem = ({item}) => {
    return (
        <div className="card">
            <div>
                <img src={item.image} alt={item.title} />    
            </div>
            <div className="product-category">Men's Running</div>
            <div className="product-title">{item.title}</div>
            <div className="product-price">${item.price}</div>
            <div className="center-btn">
                <Link to={`product/${item._id}`}><button>SEE DETAILS</button></Link>
            </div>
        </div>
    )
}

export default ProductItem
