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
        const bdQuery = getFirestore()
       
        if (categoryId ===  undefined) {
            bdQuery.collection('items').get()
                .then(data => setItems(data.docs.map(i => ({ id: i.id, ...i.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            bdQuery.collection('items').where('categoryId', '==',  categoryId ).get()
                .then(data => setItems(data.docs.map(i => ({ id: i.id, ...i.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))

        }

        

        // bdQuery.collection('items').get()
        //     .then(data => setItems(data.docs.map(i => ({ id: i.id, ...i.data() }))))
        //     .catch(err => console.log(err))
        //     .finally(() => setLoading(false))
        
        

        // //COn limite
        //     bdQuery.collection('items').limit(2).get()
        //     .then(data => setItems(data.docs.map(i => ({ id: i.id, ...i.data() }))))
        //     .catch(err => console.log(err))
        //     .finally(() => setLoading(false))



        ///buscar por categoria
        // bdQuery.collection('items').where('categoryId', '==', 'nuevo').get()
        //     .then(data => setItems(data.docs.map(i => ({ id: i.id, ...i.data() }))))
        //     .catch(err => console.log(err))
        //     .finally(() => setLoading(false))


        //Buscar por precio (se pueden ir haciendo anidando where(algo).where(algo))
        // bdQuery.collection('items').where('price', '>', 300).get()
        //     .then(data => setItems(data.docs.map(i => ({ id: i.id, ...i.data() }))))
        //     .catch(err => console.log(err))
        //     .finally(() => setLoading(false))


       



        //Forma vieja, no usar mas
        // if (id) {
        //     getItems
        //         .then(res => setItems(res.filter(prod => prod.estado === id)))
        //         .catch(err => console.log(err))
        //         .finally(() => setLoading(false))
        // } else {
        //      getItems
        //          .then(res => setItems(res))
        //          .catch(err => console.log(err))
        //          .finally(() => setLoading(false))

        // }


    }, [categoryId])


    console.log(items)


    return (
        <div>

            {loading ? <Spiner mensaje="Buscando libros....." /> : <ItemList items={items} />}

        </div>
    )
}

export default ItemListContainer


