
import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])


export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])


    const addItem = (item, cantidad) => {
        let inCartList = cartList.find((cartItem) => cartItem.id === item.id)

        if (inCartList) {
            inCartList.cantidad += cantidad
            setCartList([...cartList])
        } else {
            setCartList([...cartList, { ...item, cantidad }])

        }
    };


    const eraseItem = (id) => {
        setCartList(cartList.filter((i) => i.id !== id))
    };

    const cantItem = () => {
        return cartList.reduce((acum, item) => acum = acum + item.cantidad, 0)

    };




    const totalPrice = () => {
        return cartList.reduce((acum, item) => (acum += item.price * item.cantidad), 0)
    };



    const eraseCart = () => {
        setCartList([])
       
    };



    return (
        <CartContext.Provider value={
            {
                cartList,
                addItem,
                eraseCart,
                eraseItem,
                cantItem,
                totalPrice

            }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
