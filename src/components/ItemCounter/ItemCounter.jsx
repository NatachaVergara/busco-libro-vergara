import { useState } from 'react'
import './itemCounter.css'

const ItemCounter = ({ stock }) => {
    // eslint-disable-next-line no-unused-vars
    const [counter, setCounter] = useState(0);

    const addItem = () => {
        if (stock > 0) {
         setCounter(counter + 1)            
        }
    }

    const erasedItem = () => {
        if (stock > stock.length) {
            setCounter(counter - 1)
        }
    }
    


    return (
        <div className="container text-center ">
            <h1 className={counter > 0 ? 'conStock' : 'sinStock'}> {counter} </h1>
            <div className="mb-3">
                <button type="button" class="btn btn-primary btn-sm me-1" onClick={erasedItem}  > - </button>
                <button type="button" class="btn btn-primary btn-sm" onClick={addItem} > + </button>
            </div>
                <button type="button" class="btn btn-secondary">Agregar al carrito</button>
            
        </div>
    )
}

export default ItemCounter
