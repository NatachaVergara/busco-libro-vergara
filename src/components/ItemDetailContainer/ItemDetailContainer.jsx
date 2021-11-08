import React, { useEffect, useState } from 'react'
import libros from "../../db/items" //Array con mis libros(api)
import Spiner from '../Spinner/Spinner';
import ItemDetail from './ItemDetail';

// eslint-disable-next-line no-unused-vars
const getItem = new Promise((res, rej) => {
    const condition = true;
    
    if (condition) {
        setTimeout(() => {
            res(libros)
        }, 2000)
    } else {
        rej('404 Not found')
    }


})


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getItem
            .then(res => setItem(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        
       

    }, [])    
    
    const onAdd = () => {
        (console.log(`Item o items agregados `))
    }

    console.log(item)
    return (
        <div>           
            {loading ? <Spiner mensaje="Estamos trayendo su libro....." /> : <ItemDetail item={item[3]} onAdd={onAdd }/>}
        </div>
    )
}

export default ItemDetailContainer
