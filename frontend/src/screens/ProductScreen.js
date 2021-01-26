import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
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
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : 
                <>
                <Link to="/">Home</Link>
                <hr/>
                <Link to="/cart">Cart</Link>

                <h4>{product.title}</h4>
                <img style={{width: '50%'}} src={product.image} alt=""/>
                <p>{product.description}</p>
                <button onClick={() => addProductToCart(product)}>Add to your Cart!</button>
                </>
                
            }
            
        </div>
    )
}

export default ProductScreen
