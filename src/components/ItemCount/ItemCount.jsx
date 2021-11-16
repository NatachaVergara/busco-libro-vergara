import React, { useState } from 'react'


const ItemCount = ({ stocks, initial, onAdd }) => {
    const [count, setCount] = useState(initial)

    const increase = () => {
        if (count < stocks) {
            setCount(count + 1)

        }

    }

    const decrease = () => {
        if (count >= initial) {
            setCount(count - 1)
        }
    }

    

    return (
        <div className="container text-center ">
            <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                <button type="button" className="btn btn-primary btn-sm"  onClick={increase} disabled={count === stocks} >+</button>               
                <h2 className="mx-2">{count}</h2>
                <button type="button" className="btn btn-primary btn-sm" onClick={decrease} disabled={count === 0} >-</button>
                
            </div>
            <p> stock: {stocks - count } </p>
            <button type="button" class="btn btn-secondary" onClick={() => onAdd(count)}>Agregar al carrito </button>
        </div>
    )
}

export default ItemCount
