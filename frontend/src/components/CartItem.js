import React from 'react'
import './styles/CartItem.css';



const CartItem = ({item, removeItemFromCart }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.title}/>
            <div className="cart-item-details">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <div>
                    <h3>${item.price}</h3>
                    <button className="center-btn" onClick={() => removeItemFromCart(item.id)}>REMOVE FROM CART</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
