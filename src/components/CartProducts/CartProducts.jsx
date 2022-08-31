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
                <h3 className='cartStock'>Stock Disponible: {stock}</h3>
{/*                 <h3 className='cartQuestion'>¿Desea agregar/quitar productos?</h3>
                <div className="buttonsContainer">
                    <button className='products-buttons' onClick={() => subItem(id)}>-</button>
                    <h2>{clicks}</h2>
                    <button className='products-buttons' onClick={() => plusItem(id)}>+</button>
                </div> */}
                <button className='cartDeleteItem' onClick={() => removeItemCart(id)}>Remove</button>
            </div>
        </div>
    )
}

export default CartProducts;