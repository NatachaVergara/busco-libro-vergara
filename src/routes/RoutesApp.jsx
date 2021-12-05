import React from 'react'
import { Route, Routes } from "react-router-dom";
//Components
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import LoginContainer from '../views/Login/LoginContainer';
import RegisterContainer from '../views/RegisterContainer';






const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoryId/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />


            <Route path="/register" element={<RegisterContainer />} />

            <Route path="/login" element={<LoginContainer />} />
            
            
            
        </Routes>
    )
}

export default RoutesApp
