import { useState, useEffect } from 'react'

// import ItemCount from "../ItemCount/ItemCount"
import ItemList from "./ItemList"
import libros from "./db/items" //Array con mis libros(api)
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

const ItemListContainer = ({ titulo }) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)  


    useEffect(() => {
        //Me traigo del api el array con los libros
        getItems
            .then(res => setItems(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))       

    },[])
    
    
    console.log(items)
   
   
    // const onAdd = () => {        
    //     (console.log(`Item o items agregados `))        
    // }

    return (
        <div>
            {/* <h1 className="container  mx-md-2 my-5 text-center" >{titulo} </h1> */}
            
            {loading ? <Spiner mensaje="Buscando libros....."/>: <ItemList items={items} />}
            {/* <ItemCount stock="5" initial="1" onAdd={onAdd} /> */}
        </div>
    )
}

export default ItemListContainer


