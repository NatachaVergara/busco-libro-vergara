import { useState} from 'react'
import ItemCount from "./ItemCount/ItemCount"



const ItemListContainer = ({ titulo }) => {
    // eslint-disable-next-line no-unused-vars
    const [agregarItem, setAgregarItem] = useState('')
    
    const onAdd = () => {
        setAgregarItem(console.log('Item agregado'))
    }

    

    return (
        <div>
            <h1 className="container  mx-md-2 my-5 text-center" >{titulo} </h1>
            <ItemCount stock="5" initial="1" onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer


