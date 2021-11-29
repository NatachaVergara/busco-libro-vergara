import React from 'react'
import { Route, Routes } from "react-router-dom";
//Components
import Cart from '../components/Cart/Cart';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';





const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoryId/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default RoutesApp
