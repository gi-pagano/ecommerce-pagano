import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import ItemListContainer from '../components/item-list-container/ItemListContainer';
import NavBar from '../components/navbar/NavBar';
import ItemDetailContainer from '../components/item-detail-container/ItemDetailContainer';
import NotFound from '../not-found/NotFound';


const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <h1>Black Cat´s Treasures</h1>
            <Switch>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<h1>En construcción</h1>} />
                <Route path="*" element={<NotFound />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
