import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  RESET_CART,
} from "../constants/CartActionTypes";
import axios from "axios";

export const addToCart = (item) => async (dispatch) => {
  const { data } = await axios.get(`/api/products/${item._id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      id: data._id,
      title: data.title,
      description: data.description,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
    },
  });
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId,
  };
};

export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};
