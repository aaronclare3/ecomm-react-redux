import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProduct } from "../redux/Actions/ProductActions";
import "./styles/ProductItem.css";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className='card'>
      <div>
        <img src={item.image} alt={item.title} />
      </div>
      <div className='product-category'>Men's Running</div>
      <div className='product-title'>{item.title}</div>
      <div className='product-price'>${item.price}</div>
      <div className='center-btn'>
        <Link
          onClick={() => dispatch(getProduct(item._id))}
          to={`product/${item._id}`}>
          <button>SEE DETAILS</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
