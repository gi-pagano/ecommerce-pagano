
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './scss/styles.scss'; 
/*import Routes from './routes/Routes';*/
import Footer from './components/footer/Footer';

/*import AddToCart from "../../../cart-icon/AddToCart";*/
/*import { Link } from "react-router-dom";*/

import ItemDetail from './components/item-detail-container/item-detail/ItemDetail';
import {useState} from 'react';


function App() {

  const [details, setDetails] = useState(false);
  
  const showDetails = () => 
    setDetails(true);
  

    return (
        <>
          <div className="App">
            <div className="card">
                <img className="card-img" src="https://res.cloudinary.com/gicloud1433/image/upload/v1644185855/cap_yk0fso.jpg" alt="capi" />
                <div className="card-body">
                    <div className="card-body-layout">
                        <h3>Capitán América</h3>
                        <p>$ 30000 </p>
                    </div>
                    <div className="card-body-layout">
                        {/*<button><AddToCart /></button>*/}
                        {/*<Link to={`/item`}>*/<button onClick={showDetails}>Ver más</button>/*</Link>*/}
                        
                    </div>
                </div>    
            </div>

            { details ? <ItemDetail /> : null }

            
   
            {/*<Routes />*/}
            <Footer />
          </div>
        </>
  );
}

export default App;
