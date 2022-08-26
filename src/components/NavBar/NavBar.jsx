import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';

function NaVBar() {
    const {carrito} = useContext(CartContext)

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><strong>Black Onix Diamond</strong></Link>
                <CartWidget />
                {/* <span className="text-white">
                    {carrito.length}
                </span> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Tienda</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/pantalones">Pantalones</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/buzos">Buzos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NaVBar;