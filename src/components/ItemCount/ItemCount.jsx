import { useState } from 'react'
import './itemCount.css'

const ItemCount = ({ stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(1)

   //Funcion para sumar items al carrito
    const addItem = () => {
        if (count <= stock) {            
           setCount(count + 1)           
         }
    }
    //Funcion para remover items al carrito
    const removeItem = () => {
        if (count >= initial) {
            setCount(count - 1)
        }
    }
    //Funcion que utiliza la funcion creada onAdd y traida del itemListCointainer que permite habilitar el btn Agregar al carrito
    const btnAdd = () => {        
        if (count >= 1) {
            onAdd()            
        } else {
            alert('No hay item para agregar')
        }
    }
 

    return (
        <div className="container text-center ">
            <h6> El amuleto </h6>
            <div className="mb-3 d-flex flex-row justify-content-center align-items-center">                          
                <button type="button" className="btn btn-primary btn-sm me-1" onClick={removeItem} > - </button>
                 <h2 className="mx-2">{count}</h2>
                 <button type="button" className="btn btn-primary btn-sm" onClick={addItem} > + </button>
            </div>
             <button type="button" className="btn btn-secondary" onClick={btnAdd}>Agregar al carrito</button>
            
        </div>
    )
}

export default ItemCount
