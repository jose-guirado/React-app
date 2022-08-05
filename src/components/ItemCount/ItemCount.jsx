import React from 'react';
import './ItemCount.css';

function ItemCount(props) {
    const [clicks, setClicks] = React.useState(1);
    console.log(props.stock, props.initial);

    function clickSuma() {
        if (clicks >= 1 && clicks < props.stock) {
            setClicks(clicks + 1);
        }
    }

    function clickReset() {
        setClicks(1)
    }

    function clickResta() {
        if (clicks > 1) {
            setClicks(clicks - 1);
        }
    }

    const onAdd = () => {
        alert("Añadido al carrito")
    }

    return (
        <div className="contador">
            <h2>Unidades</h2>
            <button onClick={clickResta}><strong>-</strong></button>
            <button onClick={clickReset}><strong>Reset</strong></button>
            <button onClick={clickSuma}><strong>+</strong></button>
            <h4>Número de productos: {clicks}</h4>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;