import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import {getProducts, clearProducts} from '../redux/Actions/ProductActions';
// Components
import ProductItem from './ProductItem';

const ProductList = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.getProducts);
    const {loading, products, error} = allProducts;

    useEffect(() => {
        dispatch(getProducts());

        return () => dispatch(clearProducts());
    }, [dispatch])

    const renderProductList = products.map(item => {
        return <ProductItem item={item} key={item.id} />
    });

    return (
        <div>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : renderProductList}
        </div>
    )
}

export default ProductList;
