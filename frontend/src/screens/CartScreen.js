import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './CartScreen.css'
import {Link} from 'react-router-dom';
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

                    {cartItems.length === 0 ? 
                    <>
                    <div className="empty-cart">
                        <h4>
                            Sorry, there are no items in your cart!
                        </h4>
                        <Link to="/"><button>Go back and add some items</button></Link>
                    </div>
                    </> 
                    :
                    <>
                     <div className="cart-totals">
                        <h4>Subtotal Price: {calcTotalPrice()}</h4>
                        <h4>Subtotal Items: {calcTotalItems()}</h4>
                        <button>CHECKOUT</button>
                    </div>
                    </>
                    }                    
            </div>
        </div>
    )
}

export default CartScreen
