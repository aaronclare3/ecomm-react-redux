import React from "react";
import "./styles/CartItem.css";
import { useHistory } from "react-router-dom";

const CartItem = ({ item, removeItemFromCart, qtyChangeHandler }) => {
  const history = useHistory();
  const routeToProduct = () => {
    history.push(`/product/${item.id}`);
  };

  return (
    <div className='cart-item'>
      <img onClick={() => routeToProduct()} src={item.image} alt={item.title} />
      <div className='cart-item-details'>
        <h1 onClick={() => routeToProduct()}>{item.title}</h1>
        <p onClick={() => routeToProduct()}>
          {item.description.substr(0, 200) + "..."}
        </p>
        <span>
          Quantity:
          <select
            value={item.qty}
            onChange={(e) => qtyChangeHandler(item.id, e.target.value)}>
            {[...Array(item.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </span>
        <div>
          <h3>${item.price}</h3>
          <button
            className='center-btn'
            onClick={() => removeItemFromCart(item.id)}>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
