import { useState } from 'react'
import './itemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    // eslint-disable-next-line no-unused-vars
    const [count, setCount] = useState(1)
    const [modal, setModal] = useState()


    const addItem = () => {
        if (count <= stock) {
            setCount(count + 1)
        }
    }

    const removeItem = () => {
        if (count >= initial) {
            setCount(count - 1)
        }
    }

    const btnAdd = () => {
        if (count >= 1) {
            onAdd()

        } else { useModal() }
    }

    const useModal = () => {
        if (modal) {
            setModal(!modal)
        }
    }


    return (
        <div className="container text-center ">
            <h6> El amuleto </h6>
            <h2>{count}</h2>
            <div className="mb-3">
                <button type="button" className="btn btn-primary btn-sm me-1" onClick={removeItem} > - </button>
                <button type="button" className="btn btn-primary btn-sm" onClick={addItem} > + </button>
            </div>
            <button type="button" className="btn btn-secondary" onClick={btnAdd}>Agregar al carrito</button>

        </div>
    )
}

export default ItemCount
