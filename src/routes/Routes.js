import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import ItemListContainer from '../components/item-list-container/ItemListContainer';
import NavBar from '../components/navbar/NavBar';
import ItemDetailContainer from '../components/item-detail-container/ItemDetailContainer';
import NotFound from '../not-found/NotFound';
import Cart from '../components/cart/Cart';
import Form from '../components/form/Form';


const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <h1>Black Cat´s Treasures</h1>
            <Switch>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/form" element={<Form />} />
                <Route path="*" element={<NotFound />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
