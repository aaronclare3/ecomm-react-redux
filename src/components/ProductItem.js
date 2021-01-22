import React, {useState} from 'react'
import {Link} from 'react-router-dom';




const ProductItem = ({item}) => {
    const [detailsOpen, setDetailsOpen] = useState(false);

    const handleClick = () => {
        setDetailsOpen(!detailsOpen)
    }

    return (
        <div style={{display: 'flex', alignItems: "center"}}>
            <div>
                <img style={{height: '150px', width: '100px'}} src={item.image} alt=""/>
                <h3 style={{display: 'inline-block'}}>
                    {item.title}
                </h3>
            <button onClick={() => handleClick()}>{detailsOpen ? "Hide Description" : "Show Description"}</button>
                {detailsOpen && <p>{item.description}</p>}
                {detailsOpen && <p>${item.price}</p>}
                <Link to={`product/${item.id}`}>See Product Details</Link>
            </div>
        </div>
    )
}

export default ProductItem
