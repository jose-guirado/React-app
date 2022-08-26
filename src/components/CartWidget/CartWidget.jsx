import './CartWidget.css';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext.jsx';

function CartWidget() {
    const { carrito, totalAmount } = useContext(CartContext)
    return (
        <Link className="iconCarrito" to={"/cart"}>
        <img src="https://www.citypng.com/public/uploads/preview/hd-shopping-cart-white-logo-icon-transparent-png-11640441682ecem2ohejv.png" className="trolley" alt="tienda" width="45px"/>
        {carrito.length === 0 ?
            <span></span> :
            <span className="totalAmount">{totalAmount()}</span>}
        </Link>
    )
}

export default CartWidget;