import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HomeScreen.css";

// Actions
import { clearProducts, getProducts } from "../redux/Actions/ProductActions";
// Components
import ProductList from "../components/ProductList";
import SortProducts from "../components/SortProducts";
import ProductItem from "../components/ProductItem";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

const HomeScreen = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedType, setSortedType] = useState("");

  const allProducts = useSelector((state) => state.getProducts);
  const { loading, products, error } = allProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());

    return () => dispatch(clearProducts());
  }, [dispatch]);

  const getFilteredListFromSearch = (list, search) => {
    setFilteredList(list);
    setSearchTerm(search);
  };

  const getSortedTypeFromSort = (sortType) => {
    console.log(sortType);
    setSortedType(sortType);
  };

  // Takes in sort type (if applied) and filtered List (if the user has searched) and returns the list to give to ProductList
  const checkWhichList = (sortedType, searchTerm) => {
    let currList = products;
    // Neither Search Filter nor Sort applied, display whole entire list
    if (sortedType === "" && searchTerm === "") {
      currList = products;
      // If Sort applied...
    } else if (sortedType !== "") {
      let listToSort;
      // but no search filter, display whole list sorted
      if (searchTerm === "") {
        listToSort = products;
        // with search filter, display filtered list sorted
      } else {
        listToSort = filteredList;
      }
      switch (sortedType) {
        case "asc":
          currList = listToSort.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "desc":
          currList = listToSort.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "price-low-high":
          currList = listToSort.sort((a, b) => a.price - b.price);
          break;
        case "price-high-low":
          currList = listToSort.sort((a, b) => b.price - a.price);
          break;
        default:
          currList = products;
      }
      // Search Filter applied, but no sort, display filtered list unsorted
    } else if (searchTerm !== "" && sortedType === "") {
      currList = filteredList;
    }
    return currList.map((item) => {
      return <ProductItem item={item} key={item._id} />;
    });
  };

  return (
    <div className='homescreen-container'>
      <Navbar getList={getFilteredListFromSearch} products={products} />
      <Searchbar getList={getFilteredListFromSearch} products={products} />
      <div className='grid-wrapper'>
        <SortProducts getType={getSortedTypeFromSort} />
        {/* If someone is searching but they can't find any products */}
        {searchTerm !== "" && filteredList.length === 0 ? (
          <h1>Oops! Try another search.</h1>
        ) : (
          <ProductList
            loading={loading}
            error={error}
            list={checkWhichList(sortedType, searchTerm)}
          />
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
