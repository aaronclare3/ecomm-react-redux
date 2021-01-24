import React from 'react'
import {useSelector} from 'react-redux'
// Components
import CartItem from './CartItem'


const CartList = () => {
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart; 

    const renderCartList = cartItems.map(item => {
        return <CartItem key={item.id} item={item}/>
    })

    return (
        <div>
            {cartItems.length === 0 ? "No items in cart!" : renderCartList}
        </div>
    )
}

export default CartList
