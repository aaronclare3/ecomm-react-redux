import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import {getProducts, clearProducts} from '../redux/Actions/ProductActions';
// Components
import ProductItem from './ProductItem';

const ProductList = () => {
    const [listSorted, setListSorted] = useState('');
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.getProducts);
    const {loading, products, error} = allProducts;

    useEffect(() => {
        dispatch(getProducts());

        return () => dispatch(clearProducts());
    }, [dispatch])

    const checkListSorted = listSorted => {
        let sortedProducts = [];
        if(listSorted === "asc"){
            sortedProducts = products.sort((a,b) => a.title.localeCompare(b.title))
        }else if(listSorted === "desc"){
            sortedProducts = products.sort((a,b) => b.title.localeCompare(a.title))
        }else if(listSorted === "price-low-high"){
            sortedProducts = products.sort((a,b) => a.price-b.price)
        }else if(listSorted === "price-high-low"){
            sortedProducts = products.sort((a,b) => b.price-a.price)
        }else{
            return products.map(item => {
                return <ProductItem item={item} key={item.id} />
            });
        }
        return sortedProducts.map(item => {
            return <ProductItem item={item} key={item.id} />
        });;
    }

    return (
        <div>
                <span>Sort List </span>
            <div>
                <span onClick={() => setListSorted("asc")}>A-Z </span>
            </div>
            <div>
                <span onClick={() => setListSorted("desc")}>Z-A </span>
            </div>
            <div>
                <span onClick={() => setListSorted("price-low-high")}>Price: Low to High </span>
            </div>
            <div>
                <span onClick={() => setListSorted("price-high-low")}>Price: High to Low </span>
            </div>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : checkListSorted(listSorted)}
        </div>
    )
}

export default ProductList;
