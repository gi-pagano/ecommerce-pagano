
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './scss/styles.scss'; 
import Routes from './routes/Routes';
import Footer from './components/footer/Footer';
import { CartProvider } from './context/CartContext';

function App() {

    return (
        <>
          <div className="App">
            <CartProvider>
              <Routes />
            </CartProvider>
            <Footer />
          </div>
        </>
  );
}

export default App;
