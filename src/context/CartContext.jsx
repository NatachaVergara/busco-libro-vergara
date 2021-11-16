import {createContext, useState} from 'react'

export const CartContext = createContext([])

//Vamos a crear un componente para poder tener un componente propio y poder inyectar un estado y variebles globales

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

       
    const agregarCarrito = (item) => {
       setCartList(item)
    }

    
    return (
        <CartContext.Provider value={
            {
                cartList,
                agregarCarrito
            }}>
            
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
