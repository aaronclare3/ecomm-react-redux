import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CartScreen.css";
import { Link } from "react-router-dom";
// Components
import CartList from "../components/CartList";
import Navbar from "../components/Navbar";
//Actions
import { removeFromCart, addToCart } from "../redux/Actions/CartActions";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  const calcTotalPrice = () => {
    return cartItems.reduce(
      (totPrice, item) => (item.price + totPrice) * item.qty,
      0
    );
  };

  const calcTotalItems = () => {
    return cartItems.reduce((totQty, item) => Number(item.qty) + totQty, 0);
  };

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className='cartscreen-container'>
      <Navbar />
      <div className='cart'>
        <CartList
          qtyChangeHandler={qtyChangeHandler}
          removeItemFromCart={removeFromCartHandler}
        />

        {cartItems.length === 0 ? (
          <>
            <div className='empty-cart'>
              <h4>Sorry, there are no items in your cart!</h4>
              <Link to='/'>
                <button>ADD ITEMS</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className='cart-totals'>
              <div>
                <div>
                  <h4>Subtotal Items: {calcTotalItems()}</h4>
                  <h4>Subtotal Price: ${calcTotalPrice()}</h4>
                  <h4>Shipping and Handling: $0</h4>
                  <h4>Estimated Tax: -</h4>
                </div>
                <div>
                  <h2>Total Price: ${calcTotalPrice()}</h2>
                </div>
                <button>CHECKOUT</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
