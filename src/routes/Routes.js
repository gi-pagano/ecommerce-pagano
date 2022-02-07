import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
/*import ItemListContainer from '../components/item-list-container/ItemListContainer';*/
import NavBar from '../components/navbar/NavBar';
/*import ItemDetailContainer from '../components/item-detail-container/ItemDetailContainer';*/
import NotFound from '../not-found/NotFound';
import ItemDetail from '../components/item-detail-container/item-detail/ItemDetail';
;


const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <h1>Black Cat´s Treasures</h1>
            <h2>Las mejores figuras en tus manos</h2>
            <Switch>
                {/*<Route path="/" element={<ItemListContainer />} />
                <Route path="/category" element={<ItemListContainer />} />
                <Route path="/category/123" element={<h1> Detalle 123 </h1>} />*/}
                <Route path="/item" element={<ItemDetail />} />
                <Route path="*" element={<NotFound />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
