import React from 'react';
import './ProductList.css';

const ProductList = ({products, loading, error, list}) => {
    return (
        <div className="product-wrapper">
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : list}
        </div>
    )
}

export default ProductList;
