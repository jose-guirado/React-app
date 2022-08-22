import './App.css';
import NaVBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartWidget from './components/CartWidget/CartWidget';
import CartContextProvider from './context/CartContext.jsx';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <NaVBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart/idCategory" element={<CartWidget />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;