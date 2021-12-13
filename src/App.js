import { BrowserRouter} from "react-router-dom";
//Estilos
import "bootswatch/dist/quartz/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css'

//Components
import NavBar from './components/NavBar/NavBar';
import CartContextProvider from "./context/CartContext";
import  Footer  from "./components/Footer/Footer";
import RoutesApp from "./routes/RoutesApp";





function App() {
  return (

    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <RoutesApp />
          <Footer />
        </div>
        
      </BrowserRouter>
    </CartContextProvider>


  );
}

export default App;
