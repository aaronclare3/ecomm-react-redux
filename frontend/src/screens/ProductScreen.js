import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './ProductScreen.css'
// Actions
import {addToCart} from '../redux/Actions/CartActions';
import {clearProduct, getProduct} from '../redux/Actions/ProductActions';


const ProductScreen = ({match}) => {
    const [addItemClicked, setAddItemClicked] = useState(false);
    const productDetails = useSelector(state => state.getProduct)
    const {product, error, loading} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        let url_id = match.params.id;
        dispatch(getProduct(url_id));

        return () => dispatch(clearProduct());
    }, [dispatch, match.params.id]);


    const addProductToCart = product => {
        dispatch(addToCart(product));
        setAddItemClicked(prevState => !prevState)
    }
    
    return (
        <div>
            <div className="header-links">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
            </div>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : 
                <div className="product-container">
                    <div className="image-container">
                        <img src={product.image} alt=""/>
                    </div>
                    <div className="details-container">
                        <h4>{product.title}</h4>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        {addItemClicked ? <h4>ADDED!</h4> :
                        <button className="center-btn product-btn" onClick={() => addProductToCart(product)}>ADD TO CART</button>}
                    </div>
                </div>
            }
        </div>
    )
}

export default ProductScreen
