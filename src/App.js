import './App.css';
import NaVBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Button from './components/Button/Button.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      {/* <BrowserRouter>
        <NaVBar /> */}
        {/* <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/" element={<ItemDetailContainer />} /> */}
          <NaVBar />
          {/* <Button text="Ver más"/> */}
          <ItemListContainer />
          <ItemDetailContainer />
          <ItemCount initial={1} stock={5} />
        {/* </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;