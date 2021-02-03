import React from "react";
import { useSelector } from "react-redux";
import "./styles/CartList.css";
// Components
import CartItem from "./CartItem";

const CartList = ({ removeItemFromCart, qtyChangeHandler }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const renderCartList = cartItems.map((item) => {
    return (
      <CartItem
        key={item.id}
        item={item}
        qtyChangeHandler={qtyChangeHandler}
        removeItemFromCart={removeItemFromCart}
      />
    );
  });

  return (
    <div className='cart-list'>
      {cartItems.length === 0 ? "" : renderCartList}
    </div>
  );
};

export default CartList;
