import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from "react-router-dom";
import firestoreDB from "../../services/firebase.js";
import { getDocs, collection, query, where } from "firebase/firestore"


function ItemListContainer() {
    const [Data, setData] = useState([]);
    const idCategory = useParams().idCategory;

    function getItemsFromDB() {
        return new Promise((resolve => {
            // setTimeout(() => resolve(dataProduct), 2000)
            const indumCollection = collection(firestoreDB, "indumentaria")
            getDocs(indumCollection).then(snapshot => {
                const docsData = snapshot.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                });
                resolve(docsData);
            })
        }))
    }

    function getItemsFromDBbyIdCategory(idCategory) {
        return new Promise((resolve) => {
            const indumCollectionRef = collection(firestoreDB, "indumentaria");
            const q = query(indumCollectionRef, where("category", "==", idCategory))
            getDocs(q).then(snapshot => {
                const docsData = snapshot.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                });
                resolve(docsData);
            });
        });
    };

    useEffect(() => {
        if (idCategory) {
            getItemsFromDBbyIdCategory(idCategory).then((respuesta) => {
                setData(respuesta)
            });

        } else {
            getItemsFromDB().then((respuesta) => {
                setData(respuesta)
            });
        }
    }, [idCategory]);

    return (
        <>
            <h4 className="title">Nuevos ingresos:</h4>
            <ItemList Data={Data} />
        </>
    );
}

export default ItemListContainer;