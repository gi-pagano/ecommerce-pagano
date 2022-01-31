
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './scss/styles.scss'; 
import NavBar from "./components/navbar/NavBar";
import FuncComponent from './components/func-component/FuncComponentUno';
import ProductList from './components/item-list/ItemList';




function App() {
  return (
    <div className="App">
      <NavBar />
      <FuncComponent />
      <ProductList />
    </div>
  );
}

export default App;
