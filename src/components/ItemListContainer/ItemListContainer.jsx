import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList"
import Spiner from '../Spinner/Spinner'
import { getFirestore } from '../../service/fireBaseConfig'



const ItemListContainer = () => {
    const [items, setItems] = useState([])
    
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();


    useEffect(() => {
        const dbQuery = getFirestore()
       

        //si el useParams llega vacio entonces que me muestre el catalogo completo, de lo contrario que me traiga segun lo que vino por parámetro. 
        if (categoryId ===  undefined) {
            dbQuery.collection('items').get()
                .then(data => setItems(data.docs.map(i => ({ id: i.id, ...i.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            dbQuery.collection('items').where('categoryId', '==',  categoryId ).get()
                .then(data => setItems(data.docs.map(i => ({ id: i.id, ...i.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))

        }
      
        

        // Con limite
        //     dbQuery.collection('items').limit(2).get()
        //     .then(data => setItems(data.docs.map(i => ({ id: i.id, ...i.data() }))))
        //     .catch(err => console.log(err))
        //     .finally(() => setLoading(false))


        //Buscar por precio (se pueden ir haciendo anidando where(algo).where(algo))
        // dbQuery.collection('items').where('price', '>', 300).get()
        //     .then(data => setItems(data.docs.map(i => ({ id: i.id, ...i.data() }))))
        //     .catch(err => console.log(err))
        //     .finally(() => setLoading(false))


        


    }, [categoryId])


   


    return (
        <div>

            {loading ? <Spiner mensaje="Buscando libros....." /> : <ItemList items={items} />}

        </div>
    )
}

export default ItemListContainer


