import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {clearProduct, getProduct} from '../redux/Actions';
import {Link} from 'react-router-dom';

const ProductScreen = ({match}) => {
    const productDetails = useSelector(state => state.getProduct)
    const {product, error, loading} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        let url_id = match.params.id;
        if (product && url_id !== product.id) {
            dispatch(getProduct(url_id));
        }
        // eslint-disable-next-line
        return () => dispatch(clearProduct());
    }, []);
            
    
    return (
        <div>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : 
                <>
                <Link to="/">Home</Link>
                <h4>{product.title}</h4>
                <img style={{width: '50%'}} src={product.image} alt=""/>
                <p>{product.description}</p>
                </>
                
                }
            
        </div>
    )
}

export default ProductScreen
