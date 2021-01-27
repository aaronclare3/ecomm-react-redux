import React, {useState} from 'react'
import './Searchbar.css'

const Searchbar = ({products, getList}) => {
    const [userSearchFilter, setUserSearchFilter] = useState('');

    const filterHandler = inputVal => {
        setUserSearchFilter(inputVal);
        const updatedList = products.filter(item => {
            // Can also use .startsWith here if you want
            return item.title.toLowerCase().includes(inputVal.toLowerCase());
        })
        getList(updatedList);
    }

    return (
        <div className="search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search" onChange={e => filterHandler(e.target.value)} value={userSearchFilter}/>
        </div>
    )
}

export default Searchbar
