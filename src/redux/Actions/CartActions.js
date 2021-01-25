import {ADD_TO_CART, REMOVE_FROM_CART, RESET_CART} from '../constants/CartActionTypes';

export const addToCart = item => {
    return{
        type: ADD_TO_CART,
        payload: item
    }
}

export const removeFromCart = itemId => {
    console.log("removing", itemId)
    return{
        type: REMOVE_FROM_CART,
        payload: itemId
    }
}

export const resetCart = () => {
    return{
        type: RESET_CART,
    }
}