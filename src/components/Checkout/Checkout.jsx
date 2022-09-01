import React from 'react'
import './Checkout.css';
import { useState } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import { useContext } from 'react';
import firestoreDB from "../../services/firebase.js";
import { addDoc, collection } from "firebase/firestore";
import Button from '../Button/Button';


function Checkout() {
    const { carrito, totalPrice } = useContext(CartContext);

    const [userData, setUserData] = useState({
        email: "",
        name: "",
        phone: ""
    });

    const listaCompra = {
        buyer: { ...userData },
        item: [...carrito],
        price: totalPrice(),
        date: new Date()
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const collectionDB = collection(firestoreDB, "orders");
        const docRef = await addDoc(collectionDB, listaCompra);
        console.log(docRef);

        setUserData({
            email: "",
            name: "",
            phone: ""
        });
        console.log(listaCompra);
    }

    const changeInput = (e) => {
        const input = e.target;
        const value = input.value;
        const inputName = input.name

        let copyUserData = { ...userData }

        copyUserData[inputName] = value;
        setUserData(copyUserData);
        console.log(copyUserData);
    }

    return (
        <div className='user-form'>
            <form onSubmit={handleSubmit}>
                <div className="text">
                    Completa tus datos y te enviaremos el detalle de tu compra:
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input onChange={changeInput} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.email} required />
                    <div id="emailHelp" class="form-text"></div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Nombre</label>
                    <input onChange={changeInput} type="text" name='name' className="form-control" id="exampleInputPassword1" value={userData.name} required />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Teléfono</label>
                    <input onChange={changeInput} type="number" name='phone' className="form-control" id="exampleInputPassword1" value={userData.phone} required />
                </div>
{/*                 <div>
                <Button>Finalizar compra</Button>
                </div> */}
                <button type="submit" class="btn btn-primary">Finalizar compra</button>
            </form>
        </div>
    );
}

export default Checkout;
