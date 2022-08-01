import './Card.css';
import Button from '../Button/Button.jsx';


function Card(props) {

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.dataProduct.imgurl} alt="producto" width="180px" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5><strong>{props.dataProduct.name}</strong></h5>
                        <p>{props.dataProduct.description}</p>
                        <p>${props.dataProduct.price}</p>
                        <Button text="Agregar al carrito" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;