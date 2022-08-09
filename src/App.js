import './App.css';
import NaVBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Button from './components/Button/Button.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';


function App() {

  return (
    <div className="App">
      <NaVBar />
      {/* <Button text="Ver más"/> */}
      <ItemListContainer greeting="Nuevos ingresos" />
      <ItemCount initial={1} stock={5} />
    </div>

  );
}

export default App;