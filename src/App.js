//Importo el npm de bootswatch
import "bootswatch/dist/quartz/bootstrap.min.css";

//Traigo el componente navbar de NavBar.jsx
import NavBar from './components/NavBar/NavBar';





function App() {
  return (
    <div className="App">
      {/**Desarrollar un navbar dentro del componente navBar */}
      <NavBar />
    </div>
  );
}

export default App;
