import React from 'react'

const CartItem = ({item}) => {
    return (
        <div>
            <p>{item.title}</p>
            <p>{item.description}</p>
        </div>
    )
}

export default CartItem
