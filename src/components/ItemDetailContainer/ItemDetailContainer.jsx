import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import getProducts from '../../helpers/getProducts';
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    const [Data, setData] = useState([]);
    const id = useParams().id;

    useEffect(() => {
        getProducts(id).then(respuesta => {
            setData(respuesta);
        });
    }, []);

    return (
        <>
            <ItemDetail Data={Data} />
        </>
    );
}

export default ItemDetailContainer;