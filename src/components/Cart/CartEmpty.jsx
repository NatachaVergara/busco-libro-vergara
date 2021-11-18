import React from 'react'
import '../../index.css'
export const CartEmpty = ({h1}) => {
    return (
        <div className="container">
            <h1 className="container">{h1} </h1>
            <img                
                src="https://www.pngfind.com/pngs/m/272-2727925_continue-shopping-empty-cart-png-transparent-png.png" className="emptyCard " alt="Girl in a jacket" />
        </div>
    )
}
