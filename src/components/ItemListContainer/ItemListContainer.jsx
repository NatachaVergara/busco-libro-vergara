import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//import ItemCount from "../ItemCount/ItemCount"
import ItemList from "./ItemList"
import libros from "../../db/items" //Array con mis libros(api)
import Spiner from '../Spinner/Spinner'


//LLamo a la api items
const getItems = new Promise((res, rej) => {

    const condition = true;
    if (condition) {
        setTimeout(() => {
            res(libros)
        }, 2000)
    } else {
        rej('404 Not found')
    }

})

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)  
    
    const { id } = useParams();

   
    useEffect(() => {
        if (id) {
            getItems
                .then(res => setItems(res.filter(prod => prod.estado === id)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
             getItems
                 .then(res => setItems(res))
                 .catch(err => console.log(err))
                 .finally(() => setLoading(false))
            
        }

       
    },[id] )
   
       
   
    // const onAdd = () => {        
    //     (console.log(`Item o items agregados `))        
    // }

    return (
        <div>
                    
            {loading ? <Spiner mensaje="Buscando libros....."/>: <ItemList items={items} />}
            {/* <ItemCount stock="5" initial="1" onAdd={onAdd} /> */}
        </div>
    )
}

export default ItemListContainer


