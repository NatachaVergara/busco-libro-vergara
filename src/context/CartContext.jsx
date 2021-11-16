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
    console.log(cartList)
    


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
