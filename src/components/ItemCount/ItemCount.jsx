import { useState } from 'react'
import './itemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(1)

    //Funcion para sumar items al carrito
    //mientras que el contador sea menor a stock, va a sumar
    const addItem = () => {
        if (count < stock) {
            setCount(count + 1)
            stock = stock - (count + 1)
            // console.log(`Queda en stock ${stock}`)
        }

    }
    //Funcion para remover items del carrito
    //Mientras el count sea mayor a inicial, va a restar
    const removeItem = () => {
        if (count >= initial) {
            setCount(count - 1)
            stock = stock - (count - 1)
            // console.log(`Queda en stock ${stock}`)
        }

    }


    //Funcion que utiliza la funcion creada onAdd del itemListCointainer que me permite habilitar el btn Agregar al carrito
    const btnAdd = () => {
        //Si stock es mayor a 0 y ademas count es mayor o igual a initial puede accionarse el btn Agregar al carrito
        //El problema que tengo es que no se como bloquearlo cuando ya agregué el último item y el stock queda en 0 e hice click 1 vez en el btn.
        //me toma el stock inicial y no el que se va descontando *** no supe como manejar es aparte
        if (stock && count >= initial) {
            onAdd()
        }
    }


    return (
        <div className="container text-center ">
            <h6> El amuleto </h6>
            <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                <button type="button" className="btn btn-primary btn-sm" onClick={addItem} > + </button>
                <h2 className="mx-2">{count}</h2>

                <button type="button" className="btn btn-primary btn-sm me-1" onClick={removeItem} > - </button>
            </div>

            <button type="button" className="btn btn-secondary" onClick={btnAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
