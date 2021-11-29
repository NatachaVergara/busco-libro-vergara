import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spiner from '../Spinner/Spinner';
import ItemDetail from './ItemDetail';
import getItem from '../../Utils/getItem';



const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        //traigo la función con la llamada al catalogo y traigo un item en particular de la db
        // eslint-disable-next-line no-unused-vars
        const itemsDB = getItem(id, setItem, setLoading)        
    }, [id])

    

    return (
        <div>
            {loading ?
                <Spiner mensaje="Estamos trayendo su libro....." /> :
                <ItemDetail item={item} key={id} />
            }
        </div>
    )
}

export default ItemDetailContainer
