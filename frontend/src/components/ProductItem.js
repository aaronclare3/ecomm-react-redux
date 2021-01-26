import React from 'react'
import {Link} from 'react-router-dom';

const ProductItem = ({item}) => {
    return (
        <div style={{display: 'flex', alignItems: "center"}}>
            <div>
                <img style={{height: '150px', width: '100px'}} src={item.image} alt=""/>
                <h3 style={{display: 'inline-block'}}>
                    {item.title}
                </h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <Link to={`product/${item.id}`}>See Product Details</Link>
            </div>
        </div>
    )
}

export default ProductItem
