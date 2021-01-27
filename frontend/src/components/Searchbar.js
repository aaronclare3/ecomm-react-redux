import React, {useState} from 'react'

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
        <div>
            <div><input type="text" onChange={e => filterHandler(e.target.value)} value={userSearchFilter}/></div>
        </div>
    )
}

export default Searchbar