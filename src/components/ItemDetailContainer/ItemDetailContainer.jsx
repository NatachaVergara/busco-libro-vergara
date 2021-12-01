import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
//Componentes
import Spiner from '../Spinner/Spinner';
import ItemDetail from './ItemDetail';
import getItem from '../../utils/getItem';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {      
        getItem(id, setItem, setLoading)        
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
