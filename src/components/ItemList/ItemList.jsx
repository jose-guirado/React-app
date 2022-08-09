import React from 'react';
import Card from '../Card/Card.jsx';

function ItemList({ Data }) {
    return (
        Data.map((producto) => {
            return (
                <>
                    <Card
                        key={producto.id}
                        imgurl={producto.imgurl}
                        name={producto.name}
                        description={producto.description}
                        price={producto.price} />
                </>
            )
        })
    )
}

export default ItemList;