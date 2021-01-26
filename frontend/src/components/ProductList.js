import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import {getProducts, clearProducts} from '../redux/Actions/ProductActions';
// Components
import ProductItem from './ProductItem';

const ProductList = () => {
    const [sortedListType, setSortedListType] = useState('');
    const [userSearchFilter, setUserSearchFilter] = useState('');
    const [filteredList, setFilteredList] = useState([]);
    
    const allProducts = useSelector(state => state.getProducts);
    const {loading, products, error} = allProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());

        return () => dispatch(clearProducts());
    }, [dispatch])

    const filterHandler = inputVal => {
        setUserSearchFilter(inputVal);
        const updatedList = products.filter(item => {
            // Can also use .startsWith here if you want
            return item.title.toLowerCase().includes(inputVal.toLowerCase());
        })
        setFilteredList(updatedList);
    }

    const checkWhichList = (sortedListType, userSearchFilter, filteredList) => {
        let currList = products;
        // Neither Search Filter nor Sort applied, display whole entire list
        if(sortedListType === "" && userSearchFilter === ""){
            currList = products;
        // If Sort applied...   
        }else if(sortedListType !== ""){
            let listToSort;
            // but no search filter, display whole list sorted
            if(userSearchFilter === ""){
                listToSort = products;
            // with search filter, display filtered list sorted
            }else {
                listToSort = filteredList
            }
            switch (sortedListType) {
                case "asc":
                    currList = listToSort.sort((a,b) => a.title.localeCompare(b.title));
                    break;
                case "desc":
                    currList = listToSort.sort((a,b) => b.title.localeCompare(a.title));
                    break;
                case "price-low-high":
                    currList = listToSort.sort((a,b) => a.price-b.price);
                    break;
                case "price-high-low":
                    currList = listToSort.sort((a,b) => b.price-a.price);
                    break;     
                default:
                    currList = products;
            }
        // Search Filter applied, but no sort, display filtered list unsorted
        }else if(userSearchFilter !== "" && sortedListType === ""){
            currList = filteredList;
        }
        return currList.map(item => {
            return <ProductItem item={item} key={item.id} />
        });
    }

    return (
        <div>
            <div>
                <div><span>Filter List</span></div>
                <div><input type="text" onChange={e => filterHandler(e.target.value)} value={userSearchFilter}/></div>
            </div>
            <div>
                <div><span>Sort List </span></div>
                <div><span onClick={() => setSortedListType("asc")}>A-Z </span></div>
                <div><span onClick={() => setSortedListType("desc")}>Z-A </span></div>
                <div><span onClick={() => setSortedListType("price-low-high")}>Price: Low to High </span></div>
                <div><span onClick={() => setSortedListType("price-high-low")}>Price: High to Low </span></div>
            </div>
            <div>
                {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : checkWhichList(sortedListType, userSearchFilter, filteredList)}
            </div>
        </div>
    )
}

export default ProductList;
