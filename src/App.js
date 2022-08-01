import './App.css';
import NaVBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Button from './components/Button/Button.jsx';
import Card from './components/Card/Card';


function App() {

  const dataProduct = [
    {
      name: "Jean azul marino",
      description: "Está diseñado con denim elastizado que se amolda a tu cuerpo; también cuenta con una apertura de pierna ajustada clásica, y una estilizadora cintura de media altura.",
      price: 5000,
      imgurl: "https://static.dafiti.com.ar/p/mistral-3635-584636-1-zoom.jpg",
    },
    {
      name: "Sweater gris topo",
      description: "Sweater escote redondo con tejido jacquard fantasía en toda la prenda. De tacto suave.",
      price: 3500,
      imgurl: "https://d2r9epyceweg5n.cloudfront.net/stores/001/135/230/products/kic_320-9401-0781-132_prod11-3ca61ee9f7b105814e15882892547732-640-0.jpg",
    },
  ]

  return (
    <div className="App">
      <NaVBar />
      {/* <Button text="Ver más"/> */}
      <ItemListContainer greeting="Nuevos ingresos"/>
      <Card dataProduct={dataProduct[0]} />
      <Card dataProduct={dataProduct[1]} />
    </div>
  );
}

export default App;