import React from 'react';
// Components
import ProductList from '../components/ProductList';
import Searchbar from '../components/Searchbar';


const HomeScreen = () => {
    return (
        <div>
            <Searchbar />
            <ProductList />
        </div>
    )
}


export default HomeScreen
