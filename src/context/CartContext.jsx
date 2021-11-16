import { createContext, useState, useContext} from 'react'

 const CartContext = createContext([])


export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

       
    const agregarCarrito = (item) => {
        setCartList([...cartList, item])
    }
    const eraseCart = () => {
        setCartList([])
    }
    


    return (
        <CartContext.Provider value={
            {
                cartList,
                agregarCarrito,
                eraseCart
            }}>
            
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
