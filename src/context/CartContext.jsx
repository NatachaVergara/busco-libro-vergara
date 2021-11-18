import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])


export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])


    const agregarCarrito = (item, cantidad) => {

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

        //setCartList(cartList.filter((i)=> i.id !== id))

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
