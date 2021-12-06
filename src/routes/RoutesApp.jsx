import React from 'react'
import { Route, Routes } from "react-router-dom";
//Components
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Login from '../views/Login';
import Register from '../views/Register';
import ResetPassword from '../views/ResetPassword';






const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoryId/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
    )
}

export default RoutesApp
