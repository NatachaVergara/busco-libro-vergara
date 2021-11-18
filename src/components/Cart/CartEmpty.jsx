import React from 'react'
import '../../index.css'
export const CartEmpty = ({h1}) => {
    return (
        <div className="container d-flex flex-column">
            <h1 className="align-self-center">{h1} </h1>
            <img                
                src="https://www.pngfind.com/pngs/m/272-2727925_continue-shopping-empty-cart-png-transparent-png.png" className="emptyCard mt-5 align-self-center" alt="Girl in a jacket" />
        </div>
    )
}
