import {createContext, useState} from 'react'

const CardContext = createContext([])
//Vamos a crear un componente para poder tener un componente propio y poder inyectar un estado y variebles globales

const CartContextProvider = ({ children }) => {
    const [cardList, setCardList] = useState([])

    function agregarCarrito(item) {
        setCardList(item)
    }


    return (
        <CardContext.Provider value={
            {
                cardList,
                agregarCarrito
            }}>
            {children}
        </CardContext.Provider>
    )
}

export default CartContextProvider
