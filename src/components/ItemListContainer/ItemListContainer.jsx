import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//Componentes
import ItemList from "./ItemList"
import Spiner from '../Spinner/Spinner'
import getItems from '../../utiles/getItems'

const ItemListContainer = () => {
    const [items, setItems] = useState([])    
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();

    useEffect(() => {              
        getItems(categoryId, setItems, setLoading  )
    }, [categoryId])  


    return (
        <div>
            {loading ? <Spiner mensaje="Buscando libros....." /> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer


