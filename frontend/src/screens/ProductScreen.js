import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductScreen.css";
// Actions
import { addToCart } from "../redux/Actions/CartActions";
import { clearProduct, getProduct } from "../redux/Actions/ProductActions";

// components
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";

const ProductScreen = ({ match }) => {
  const [qty, setQty] = useState(1);
  const [itemInCart, setItemInCart] = useState(false);
  const productDetails = useSelector((state) => state.getProduct);
  const cart = useSelector((state) => state.cart.cartItems);

  const { product, error, loading } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(match.params.id));

    return () => dispatch(clearProduct());
  }, [dispatch, match]);

  const addProductToCart = (product) => {
    dispatch(addToCart(product._id, qty));
  };

  const checkItemInCart = (itemId) => {
    for (let item in cart) {
      if (cart[item].id === itemId) return true;
    }
    return false;
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className='product-container'>
          <div className='image-container'>
            <img src={product.image} alt={product.title} />
          </div>
          <div className='details-container'>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>
              Status:
              <span>
                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            <p>
              qty:
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </p>
            {checkItemInCart(product._id) ? (
              <h4>ADDED!</h4>
            ) : (
              <button
                className='center-btn product-btn'
                onClick={() => (
                  addProductToCart(product), console.log(product)
                )}>
                ADD TO CART
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
