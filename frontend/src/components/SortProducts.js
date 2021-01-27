import React, {useState} from 'react'
import './SortProducts.css'

const SortProducts = ({getType}) => {
    const [sortedListType, setSortedListType] = useState('');

    const handleClickSort = (sortType) => {
        setSortedListType(sortType);
        getType(sortType);
    }

    return (
        <div className="sorts-list">
            <div><span>Sort Items</span></div>
            <div><span className={sortedListType === "asc" ? "filter-active" : ""} onClick={() => handleClickSort("asc")}>A-Z</span></div>
            <div><span className={sortedListType === "desc" ? "filter-active" : ""} onClick={() => handleClickSort("desc")}>Z-A</span></div>
            <div><span className={sortedListType === "price-low-high" ? "filter-active" : ""} onClick={() => handleClickSort("price-low-high")}>Price: Low to High</span></div>
            <div><span className={sortedListType === "price-high-low" ? "filter-active" : ""} onClick={() => handleClickSort("price-high-low")}>Price: High to Low</span></div>
        </div>
    )
}

export default SortProducts
