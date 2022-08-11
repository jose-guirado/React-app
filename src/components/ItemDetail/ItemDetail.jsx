import React from 'react';
import Card from '../Card/Card.jsx';
import './ItemDetail.css'

function ItemDetail({ Data }) {
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
        </section>
    )
}

export default ItemDetail;