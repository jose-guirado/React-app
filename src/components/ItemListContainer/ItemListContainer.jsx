import './ItemListContainer.css';


function ItemListContainer(props) {

    return (
        <h4 className="title">{props.greeting}</h4>
    );
}

export default ItemListContainer;