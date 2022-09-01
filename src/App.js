import './App.css';
import NaVBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart.jsx';
import CartContextProvider from './context/CartContext.jsx';
import Checkout from './components/Checkout/Checkout.jsx';


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
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;