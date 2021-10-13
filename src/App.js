import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar
        title='Busco Libro'
        comprar='comprar'
        vender='vender' />
    </div>
  );
}

export default App;
