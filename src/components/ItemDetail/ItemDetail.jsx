import React, { useState } from "react"
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Link } from "react-router-dom";
import './ItemDetail.css'
import Swal from 'sweetalert';


function ItemDetail({ Data }) {

    const [cantidad, setCantidad] = useState(0)

    function handleAdd(clicks) {
        setCantidad(clicks);
    }
    return (
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
            </div>
            {cantidad === 0 ?
                <ItemCount initial={1} stock={5} onAdd={handleAdd} />
                : <Link className="btnShowCarrito" to={"/cart"}>Ir al carrito</Link>
            }
        </section>
    )
}

export default ItemDetail;