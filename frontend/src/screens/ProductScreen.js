import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './ProductScreen.css'
// Actions
import {addToCart} from '../redux/Actions/CartActions';
import {clearProduct, getProduct} from '../redux/Actions/ProductActions';


const ProductScreen = ({match}) => {
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
                        <button className="center-btn" onClick={() => addProductToCart(product)}>Add to your Cart!</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProductScreen
