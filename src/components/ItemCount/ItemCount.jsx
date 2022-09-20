import React from 'react';
import './ItemCount.css';


function ItemCount(props) {
    const [clicks, setClicks] = React.useState(1);

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

    const handleClick = () => {
        props.onAdd(clicks);
    }

    return (
        <div className="contador">
            <div><button onClick={clickResta}><strong>-</strong></button>
                <button onClick={clickReset}><strong>Reset</strong></button>
                <button onClick={clickSuma}><strong>+</strong></button></div>
            <div className="cantidad"><h4>{clicks}</h4></div>
            <div><button onClick={handleClick}>Agregar al carrito</button></div>
        </div>
    )
}

export default ItemCount;