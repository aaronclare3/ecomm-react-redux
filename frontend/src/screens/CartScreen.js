import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
// Components
import CartList from '../components/CartList';
//Actions
import {removeFromCart} from '../redux/Actions/CartActions';


const CartScreen = () => {
    const cart = useSelector(state => state.cart); 
    const {cartItems} = cart;
    const dispatch = useDispatch();

    const calcTotalPrice = () => {
        return cartItems.reduce((totPrice, item) => item.price + totPrice, 0)
    }

    const calcTotalItems = () => {
        return cartItems.length
    }

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div>
            <CartList removeItemFromCart={removeFromCartHandler}/>
            <div>Subtotal Price: {calcTotalPrice()}</div>
            <div>Subtotal Items: {calcTotalItems()}</div>
        </div>
    )
}

export default CartScreen
