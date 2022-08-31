import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import firestoreDB from "../../services/firebase.js";
import { collection, doc, getDoc } from "firebase/firestore"


function ItemDetailContainer() {
    const [Data, setData] = useState([])
    const id = useParams().id
    useEffect(() => {
        function getDetail(id) {
            return new Promise((respuesta) => {
                const productosCollection = collection(firestoreDB, "indumentaria");
                const docRef = doc(productosCollection, id);
                getDoc(docRef).then(snapshot => {
                    respuesta(
                        { ...snapshot.data(), id: snapshot.id }
                    )
                });
            })
        }
        getDetail(id).then(product => {
            setData(product)
        })
    }, [id])

    return (
        <>
            <ItemDetail Data={Data} />
        </>
    );
}

export default ItemDetailContainer;