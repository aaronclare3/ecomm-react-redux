import React from 'react'



const CartItem = ({item, removeItemFromCart }) => {
    return (
        <div className="cart-item">
            <div className="cart-img">
                <img src={item.image} alt={item.title}/>
            </div>
            <div className="cart-details">
                <div>
                    <h3>{item.title}</h3>
                </div>
                <div>
                    <p>{item.description}</p>
                </div>
                <div className="cart-details-price-button">
                    <span>${item.price}</span>
                    <button className="center-btn" onClick={() => removeItemFromCart(item.id)}>REMOVE FROM CART</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
