import { BrowserRouter, Routes, Route } from "react-router-dom";
//Estilos
import "bootswatch/dist/quartz/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css'

//Components
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";




function App() {
  return (
   
    <CartContextProvider>
      <BrowserRouter>
         <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoryId/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
      
   
  );
}

export default App;
