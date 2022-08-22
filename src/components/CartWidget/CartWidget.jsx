import './CartWidget.css';
import { Link } from "react-router-dom";

function CartWidget() {
    return (
        <Link className="iconCarrito" to={"/cart"}>
        <img src="https://www.citypng.com/public/uploads/preview/hd-shopping-cart-white-logo-icon-transparent-png-11640441682ecem2ohejv.png" className="trolley" alt="tienda" width="45px"/>
        </Link>
    )
}

export default CartWidget;