import { get } from "mongoose";
import React, { useState } from "react";
import "./styles/Searchbar.css";

const Searchbar = ({ products, getList }) => {
  const [userSearchFilter, setUserSearchFilter] = useState("");

  const filterHandler = (inputVal) => {
    setUserSearchFilter(inputVal);
    const updatedList = products.filter((item) => {
      // Can also use .startsWith here if you want
      return item.title.toLowerCase().includes(inputVal.toLowerCase());
    });
    if (updatedList.length !== 0) {
      console.log("it's not 0");
      getList(updatedList, inputVal);
    } else {
      console.log("it's zero");
      getList([], inputVal);
    }
  };

  return (
    <div className='search'>
      <i className='fas fa-search'></i>
      <input
        type='text'
        placeholder='Search'
        onChange={(e) => filterHandler(e.target.value)}
        value={userSearchFilter}
      />
    </div>
  );
};

export default Searchbar;
