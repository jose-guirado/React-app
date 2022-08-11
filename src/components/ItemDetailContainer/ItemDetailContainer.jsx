import React, { useEffect, useState } from "react"
import dataProduct from '../Data/Data.jsx';
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(dataProduct), 2000)
    })
}

function ItemDetailContainer() {
    const [Data, setData] = useState([]);

    useEffect(() => {
        getProducts().then(respuesta => {
            setData(respuesta[0]);
        });
    }, []);

    return (
        <>
            <ItemDetail Data={Data} />
        </>
    );
}

export default ItemDetailContainer;