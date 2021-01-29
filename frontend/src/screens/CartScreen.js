import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './CartScreen.css'
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
        <div className="cartscreen-container">
            <div className="cart">
                <CartList removeItemFromCart={removeFromCartHandler}/>

                <div className="cart-totals">
                    <div>Subtotal Price: {calcTotalPrice()}</div>
                    <div>Subtotal Items: {calcTotalItems()}</div>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
