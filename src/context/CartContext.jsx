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
            console.log(newCart)
            setCartList(newCart)
        } else {
            setCartList([...cartList, { ...item, cantidad }])
        }

    }


    const eraseItem = (id) => {
        setCartList(cartList.filter((i)=> i.id !== id))
    }

    const cantItem = () => {
        return cartList.reduce((acum, item) => acum = acum + item.cantidad, 0)       
        
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
                eraseItem,
                cantItem
            }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
