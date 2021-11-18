import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])


export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])


    const addItem = (item, cantidad) => {

        const isInCart = (item) => {
            return cartList.some((cartItem) => cartItem.id === item.id);
        };

        if (isInCart(item)) {
            let newCart = cartList
            newCart.forEach((i) => {
                if (i.id === item.id) {
                    i.cantidad += cantidad
                }

            });
            setCartList(newCart)
        } else {
            setCartList([...cartList, { ...item, cantidad }])
        }

    }


    const eraseItem = (id) => {
        setCartList(cartList.filter((i)=> i.id !== id))

    }


    const eraseCart = () => {
        setCartList([])
    }



    return (
        <CartContext.Provider value={
            {
                cartList,
                addItem,
                eraseCart,
                eraseItem
            }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
