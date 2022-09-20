import React from 'react'
import './CartProducts.css';

function CartProducts({ imgurl, name, price, clicks, removeItemCart, id, stock, plusItem, subItem }) {

    return (
        <div className='itemCart-container'>
            <img className='cartImg' src={imgurl} alt={`imagen de: ${name}`}></img>
            <div className='description-container'>
                <h2 className='cartName'>{name}</h2>
                <h3 className='cartAmount'>Cantidad: {clicks}</h3>
                <h3 className='cartSubtotal'> Subtotal: ${price}</h3>
                <h3 className='cartStock'>Stock disponible: {stock}</h3>
                <button className='cartDeleteItem' onClick={() => removeItemCart(id)}>Remove</button>
            </div>
        </div>
    )
}

export default CartProducts;