import axios from 'axios';
import {GET_PRODUCTS_SUCCESS, GET_PRODUCTS_REQUEST, GET_PRODUCTS_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS, CLEAR_PRODUCT, CLEAR_PRODUCTS} from '../constants/ProductActionTypes';

export const getProducts = () => async (dispatch, getState) => {
    try {

        dispatch({type: GET_PRODUCTS_REQUEST})

        const {data} = await axios.get('/api/products');

        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
    
}

export const getProduct = (productId) => async (dispatch, getState) => {
    try {
        dispatch({type: GET_PRODUCT_REQUEST})

        const {data} = await axios.get(`/api/products/${productId}`);
        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const clearProduct = () => {
    return {
        type: CLEAR_PRODUCT
    }
}

export const clearProducts = () => {
    return {
        type: CLEAR_PRODUCTS
    }
}