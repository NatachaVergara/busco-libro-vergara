import { getFirestore } from '../../service/fireBaseConfig'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spiner from '../Spinner/Spinner';
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const bdQuery = getFirestore()

        //busca y trae solo 1 elemento segun el id que llega por parámetro
        bdQuery.collection('items').doc(id).get() //traer 1 por el id
            .then(resp => setItem({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [id])

    

    return (
        <div>

            {loading ? <Spiner mensaje="Estamos trayendo su libro....." /> : <ItemDetail item={item} key={id} />}
        </div>
    )
}

export default ItemDetailContainer
