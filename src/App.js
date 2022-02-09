
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './scss/styles.scss'; 
import Routes from './routes/Routes';
import Footer from './components/footer/Footer';

function App() {

    return (
        <>
          <div className="App">
            <Routes />
            <Footer />
          </div>
        </>
  );
}

export default App;
