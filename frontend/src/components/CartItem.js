import React from 'react'



const CartItem = ({item, removeItemFromCart }) => {
    return (
        <div>
            <p>{item.title}</p>
            <p>{item.description} <span>${item.price}</span><button onClick={() => removeItemFromCart(item.id)}>X</button></p>
        </div>
    )
}

export default CartItem
