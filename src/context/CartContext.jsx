import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])


export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    

    const agregarCarrito = (item, cantidad) => {
       
        const isIncartList = cartList.find((i) => i.id === item.id)
       
        if (isIncartList) {            
            setCartList([...cartList, item])
        } else {
            setCartList([...cartList, item])
        }
    }
     

    const eraseItem = (id) => {
        cartList.splice(cartList.findIndex((i) => i.id === cartList.id))
        setCartList([...cartList])

       
    }





    const eraseCart = () => {
        setCartList([])
    }



    return (
        <CartContext.Provider value={
            {
                cartList,
                agregarCarrito,
                eraseCart,
                eraseItem
                

            }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
