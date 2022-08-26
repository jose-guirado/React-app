import './Cart.css';
import CartProducts from "../CartProducts/CartProducts.jsx";
import Checkout from '../Checkout/Checkout.jsx';
import dataProduct from '../Data/Data.jsx';
import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext.jsx';
import { Link } from "react-router-dom"
import Swal from 'sweetalert';

function Cart() {
    const { carrito, removeItem, removeAll, totalPrice, totalAmount, plusItemsCart, subItemsCart } = useContext(CartContext);
    function removeItemCart(id) {
        removeItem(id)
    }
    function plusItem(id) {
        plusItemsCart(id)
    }
    function subItem(id) {
        subItemsCart(id)
    }

    useEffect(() => {
    }, [carrito])

    if (carrito.length === 0) {
        Swal({
            icon: "warning",
            title: "El carrito está vacío",
            text: "Vuelve al inicio para comprar",
    })
        return (
            <main>
                <div className="emptyCartContainer">
                    <div className="titleEmptyContainer">
                        <h1>Carrito Vacío</h1>
                        <img className="carritoVacio" src="https://cdn-icons-png.flaticon.com/512/102/102661.png" alt="carrito vacío"></img>
                    </div>
                    <Link to={"/"}><button className="cartResumeButton">Volver al home</button></Link>
                </div>
            </main>
        )
    }
    else {
        return (
            <main className="mainCart">
                <section className="sectionCartItem">
                    {carrito.map((item, index) => {
                        return (
                            <CartProducts
                                key={item.id + item.name}
                                id={index}
                                imgurl={item.imgurl}
                                name={item.name}
                                price={item.price * item.clicks}
                                clicks={item.clicks}
                                stock={item.stock}
                                plusItem={plusItem}
                                subItem={subItem}
                                removeItemCart={removeItemCart}
                            />
                        )
                    })}
                    <button className="cartDeleteAll" onClick={removeAll}> Vaciar Carrito </button>
                </section>
                <section className="cartResume">
                    <h1 className="titleResume">Resumen del Pedido</h1>
                    <h3 className="resume">Cantidad: {totalAmount()} productos</h3>
                    <h3 className="resume">Subtotal: ${totalPrice()}</h3>
                    <div className="containerButtonsResume">
                        <Link to={"/"}><button className="cartResumeButtons">Seguir Comprando </button></Link>
                        <Link to={"/Checkout"}><button className="cartResumeButtons">Finalizar Compra </button></Link>
                    </div>
                </section>
            </main>
        )
    }
}

export default Cart;