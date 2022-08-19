import './App.css';
import NaVBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartWidget from './components/CartWidget/CartWidget';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NaVBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/cart/idCategory" element={<CartWidget />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;