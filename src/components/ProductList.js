import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import {getProducts, clearProducts} from '../redux/Actions/ProductActions';
// Components
import ProductItem from './ProductItem';

const ProductList = () => {
    const [sortedList, setSortedList] = useState('');
    const [filteredList, setFilteredList] = useState([]);
    const [listActive, setListActive] = useState('');
    const [userSearchFilter, setUserSearchFilter] = useState('');

    const allProducts = useSelector(state => state.getProducts);
    const {loading, products, error} = allProducts;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());

        return () => dispatch(clearProducts());
    }, [dispatch])

    const filterHandler = inputVal => {
        setListActive("filter");
        setUserSearchFilter(inputVal);
        const updatedList = products.filter(item => {
            // Can also use .startsWith here if you want
            return item.title.toLowerCase().includes(inputVal.toLowerCase());
        })
        setFilteredList(updatedList);
    }

    const checkListSorted = (sortedList, listActive) => {
        if(listActive === ""){
            return products.map(item => {
                return <ProductItem item={item} key={item.id} />
            });
        }else if(listActive === "sorted"){
            let sortedProducts = [];
            if(sortedList === "asc"){
                sortedProducts = products.sort((a,b) => a.title.localeCompare(b.title))
            }else if(sortedList === "desc"){
                sortedProducts = products.sort((a,b) => b.title.localeCompare(a.title))
            }else if(sortedList === "price-low-high"){
                sortedProducts = products.sort((a,b) => a.price-b.price)
            }else if(sortedList === "price-high-low"){
                sortedProducts = products.sort((a,b) => b.price-a.price)
            }
            return sortedProducts.map(item => {
                return <ProductItem item={item} key={item.id} />
            });
        }else if(listActive === "filter"){
            return filteredList.map(item => {
                return <ProductItem item={item} key={item.id} />
            });
        }
    }

    const sortedHandler = (sortedType) => {
        setListActive("sorted");
        setSortedList(sortedType);
    }

    return (
        <div>
            <div>
                <div><span>Filter List</span></div>
                <div><input type="text" onChange={e => filterHandler(e.target.value)} value={userSearchFilter}/></div>

            </div>
            <div>
                <div><span>Sort List </span></div>
                <div><span onClick={() => sortedHandler("asc")}>A-Z </span></div>
                <div><span onClick={() => sortedHandler("desc")}>Z-A </span></div>
                <div><span onClick={() => sortedHandler("price-low-high")}>Price: Low to High </span></div>
                <div><span onClick={() => sortedHandler("price-high-low")}>Price: High to Low </span></div>
            </div>
            <div>
                {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : checkListSorted(sortedList, listActive)}
            </div>
        </div>
    )
}

export default ProductList;
