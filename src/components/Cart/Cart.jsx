
import { useCartContext } from '../../context/CartContext'

export const Cart = () => {

    const { cartList } = useCartContext()

    console.log(cartList)

    return (
        <div>
            <p>Carrito de compra</p>
            
            

        </div>
    )
}
