import { useState } from 'react'
import './itemCount.css'

const ItemCount = ({ stocks, initial, onAdd, title }) => {
    const [count, setCount] = useState(1)

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

    onAdd(count)

    return (
        <div className="container text-center ">
            <h6> {title} </h6>
            <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                <button type="button" className="btn btn-primary btn-sm"  onClick={increase} disabled={count === stocks} >+</button>               
                <h2 className="mx-2">{count}</h2>
                <button type="button" className="btn btn-primary btn-sm" onClick={decrease} disabled={count === 0} >-</button>
                
            </div>            
            <p>Stock restante {stocks - count} </p>
        </div>
    )
}

export default ItemCount
