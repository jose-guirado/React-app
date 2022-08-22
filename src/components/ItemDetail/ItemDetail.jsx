import React, { useState } from "react"
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Link } from "react-router-dom";
import './ItemDetail.css'
import Swal from 'sweetalert';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';


function ItemDetail({ Data }) {

    const { addToCart } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(0)

    function handleAdd(clicks) {
        addToCart(Data, clicks);
        setCantidad(clicks);
        Swal({
            icon: "success",
            text: `Has añadido ${clicks} ${Data.name} al carrito`,
        });
    }

    return (
        <>
            <section className='sectionDetail'>
                <div className='imgContainer'>
                    <img className='detailImg' src={Data.imgurl} alt='Foto jean'></img>
                    <img className='detailImg' src={Data.imgurl1} alt='Foto jean'></img>
                </div>
                <div className='detailContainer'>
                    <h2 className='detailName'>{Data.name}</h2>
                    <p className='detailDescription'>{Data.description}</p>
                    <p className='detailPrice'>${Data.price}</p>
                    <p className='detailStock'>Stock disponible: {Data.stock}</p>
                    {cantidad === 0 ?
                        <ItemCount stock={Data.stock} min={1} onAdd={handleAdd} /> :
                        <Link className="btnShowCarrito" to={"/cart"}>Ir al carrito</Link>}
                </div>
                <div className='detailBtn'>
                    <Link className="btnVolverInicio" to={"/"}>Volver al home</Link>
                </div>
            </section>
        </>
    )
}

export default ItemDetail;