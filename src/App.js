import { BrowserRouter, Routes, Route } from "react-router-dom";
//Estilos
import "bootswatch/dist/quartz/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css'
//Components
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
