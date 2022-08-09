import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import dataProduct from '../Data/Data.jsx';
import ItemList from '../ItemList/ItemList.jsx';


function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(dataProduct), 2000)
    })
}

function ItemListContainer() {
    const [Data, setData] = useState([]);

    useEffect(() => {
        getProducts().then((respuesta) => {
            setData(respuesta);
        });
    }, []);

    return (
        <>
            <h4 className="title">{ItemListContainer.greeting}</h4>
            <ItemList Data={Data} />
        </>
    );
}

export default ItemListContainer;