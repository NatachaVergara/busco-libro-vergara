import { useState } from 'react'
import './itemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(1)

    //Funcion para sumar items al carrito
    //mientras que el contador sea menor a stock, va a sumar
    const addItem = () => {
        count >= stock ? console.log('No hay más stock para agregar') : setCount(count + 1)
        
    }
    //Funcion para remover items del carrito
    //Mientras el count sea mayor a inicial, va a restar
    const removeItem = () => {
        count >= initial ? setCount(count - 1) : console.log(`No hay items para agregar`)
        
    }


  //  Funcion que utiliza la funcion creada onAdd del itemListCointainer que me permite habilitar el btn Agregar al carrito
    const btnAdd = () => {       
      onAdd()
      
    }


    return (
        <div className="container text-center ">
            <h6> El amuleto </h6>
            <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                <button type="button" className="btn btn-primary btn-sm" onClick={addItem}  > + </button>
                <h2 className="mx-2">{count}</h2>

                <button type="button" className="btn btn-primary btn-sm me-1" onClick={removeItem}  > - </button>
            </div>

            <button type="button" className="btn btn-secondary" onClick={btnAdd} disabled={count < initial}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
