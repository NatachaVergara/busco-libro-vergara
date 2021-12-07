import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//Componentes
import ItemList from "./ItemList"
import Spiner from '../Spinner/Spinner'
import getItems from '../../utils/getItems'

const ItemListContainer = () => {
    const [items, setItems] = useState([])    
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();

    useEffect(() => {              
        getItems(categoryId, setItems, setLoading  )
    }, [categoryId])  


    return (
        <div>
            {loading ? <Spiner  /> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer


