import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './HomeScreen.css';

// Actions
import {clearProducts, getProducts} from '../redux/Actions/ProductActions';
// Components
import ProductList from '../components/ProductList';
import Searchbar from '../components/Searchbar';
import SortProducts from '../components/SortProducts';
import ProductItem from '../components/ProductItem';



const HomeScreen = () => {
    const [filteredList, setFilteredList] = useState([]);
    const [sortedType, setSortedType] = useState('');

    const allProducts = useSelector(state => state.getProducts);
    const {loading, products, error} = allProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());

        return () => dispatch(clearProducts());
    }, [dispatch])

    const getFilteredListFromSearch = (list) => {
        console.log(list);
        setFilteredList(list);
    }

    const getSortedTypeFromSort = (sortType) => {
        console.log(sortType);
        setSortedType(sortType)
    }

    const checkWhichList = (sortedType, filteredList) => {
        let currList = products;
        // Neither Search Filter nor Sort applied, display whole entire list
        if(sortedType === "" && filteredList.length === 0){
            currList = products;
        // If Sort applied...   
        }else if(sortedType !== ""){
            let listToSort;
            // but no search filter, display whole list sorted
            if(filteredList.length === 0){
                listToSort = products;
            // with search filter, display filtered list sorted
            }else {
                listToSort = filteredList
            }
            switch (sortedType) {
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
        }else if(filteredList.length !== 0 && sortedType === ""){
            currList = filteredList;
        }
        return currList.map(item => {
            return <ProductItem item={item} key={item._id} />
        });
    }

    return (
        <div>
            <div>
                <Searchbar getList={getFilteredListFromSearch} products={products}/>
            </div>
            <div className="grid-wrapper">
                <SortProducts getType={getSortedTypeFromSort}/>
                <ProductList loading={loading} error={error} list={checkWhichList(sortedType, filteredList)}/>
            </div>
        </div>
    )
}


export default HomeScreen
