import React, {useEffect} from 'react';
import ProductItem from './ProductItem';
import {getProducts, clearProducts} from '../redux/Actions';
import { useDispatch, useSelector } from 'react-redux';



const ProductList = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.getProducts);
    const {loading, products, error} = allProducts;



    useEffect(() => {
        dispatch(getProducts());

        return () => dispatch(clearProducts());
    }, [dispatch])

    const listOfProducts = products.map(item => {
        return <ProductItem item={item} key={item.id} />
    });
    return (
        <div>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : listOfProducts}
        </div>
    )
}

export default ProductList;
