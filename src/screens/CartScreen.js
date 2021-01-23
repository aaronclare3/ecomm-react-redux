import React from 'react';
import { useSelector } from 'react-redux';

const CartScreen = () => {  
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart; 

    const cartList = cartItems.map(item => {
        return <h1>{item.title}</h1>
    })
    return (
        <div>
            {cartList}
        </div>
    )
}

export default CartScreen
