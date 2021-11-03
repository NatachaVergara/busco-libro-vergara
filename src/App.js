//Importo el npm de bootswatch
import "bootswatch/dist/quartz/bootstrap.min.css";
import 'animate.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


//Traigo el componente navbar de NavBar.jsx
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      {/**Desarrollar un navbar dentro del componente navBar */}
      <NavBar />
      {/**Desarrollar un componente que contendra el catalogo de la app */}
      <ItemListContainer />
    </div>
  );
}

export default App;
