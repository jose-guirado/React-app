import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from "react-router-dom";

function NaVBar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><strong>Black Onix Diamond</strong></a>
                <CartWidget />
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