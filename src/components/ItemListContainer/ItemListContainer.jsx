import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import dataProduct from '../Data/Data.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import getProducts from '../../helpers/getProducts';
import { useParams } from "react-router-dom";


function ItemListContainer() {
    const [Data, setData] = useState([]);
    const idCategory = useParams().idCategory;
    function getProducts() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(dataProduct), 2000)
        })
    }

    useEffect(() => {
        getProducts().then((respuesta) => {
            let filtro = dataProduct.filter(elemento => elemento.category === idCategory)
            if (idCategory === undefined) {
                setData(respuesta)
            }
            else {
                setData(filtro)
            }
        });
    }, [idCategory]);

    return (
        <>
            <h4 className="title">Nuevos ingresos:</h4>
            <ItemList Data={Data} />
        </>
    );
}

export default ItemListContainer;