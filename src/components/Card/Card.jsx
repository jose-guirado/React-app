import './Card.css';
import { Link } from "react-router-dom";


function Card({ imgurl, name, description, price, id }) {

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imgurl} alt="producto" width="180px" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5><strong>{name}</strong></h5>
                        <p>{description}</p>
                        <p>${price}</p>
                        <Link class="btnVM" to={`/detalle/${id}`}> Ver más </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;