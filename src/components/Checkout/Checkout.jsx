import React from 'react'
import './Checkout.css';
import { useState } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import { useContext } from 'react';
import firestoreDB from "../../services/firebase.js";
import { addDoc, collection } from "firebase/firestore";
import { Link } from 'react-router-dom'


function Checkout() {
    const { carrito, totalPrice, clearCart } = useContext(CartContext);

    const [userData, setUserData] = useState({
        email: "",
        name: "",
        phone: ""
    });

    const [orderFirebase, setOrderFirebase] = useState({
        id: "",
        complete: false,
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
        setOrderFirebase({ id: docRef.id, complete: true });
        clearCart()
    }

    function changeInput(e) {
        const input = e.target;
        const value = input.value;
        const inputName = input.name

        let copyUserData = { ...userData };

        copyUserData[inputName] = value;
        setUserData(copyUserData);
    }

    if (orderFirebase.complete === true) {
        return (
            <main className='mainCheckOut'>
                <div className='thankYouContainer'>
                    <h1 className='titleThankYou'>¡La compra se realizó con éxito!</h1>
                    <h2 className='subtitleThankYou'>Gracias por confiar en Black Onix Diamond, {userData.name}</h2>
                    <h4 className='detailCheckOut'>En instantes enviaremos el detalle de su pedido al siguiente correo: {userData.email}</h4>
                    <h5 className='detailCheckOut'>El ID para el seguimiento de tu compra es: {orderFirebase.id}</h5>
                    <Link to={"/"}> <button className='buttonThankYou'>Volver a la tienda</button></Link>
                </div>
            </main>
        )
    }

    else {
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
                    <button type="submit" class="btn btn-primary">Finalizar compra</button>
                </form>
            </div>
        )
    }
}

export default Checkout;
