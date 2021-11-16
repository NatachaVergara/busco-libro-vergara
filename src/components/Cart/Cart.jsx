
import { useCartContext } from '../../context/CartContext'

export const Cart = () => {

    const { cartList, eraseCart } = useCartContext()

    console.log(cartList)

    return (
        <div>
            <h1 className="container">Carrito de compra</h1>
        
            {
                cartList.map(item =>
                <div className="w-50ms-md-5 ps-5 " key={item.id}>
                    <table class="table table-hover container">
                        <thead >
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Autor</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">
                                <button className="btn btn-outline-dark">Eliminar</button>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr key={item.id} className="table-active">                                
                                    <th scope="row"></th>
                                    <td>{item.autor}</td>
                                    <td>{item.cantidad}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                )}

            <button type="button" className="btn btn-outline-secondary ms-5" onClick={eraseCart}>Eliminar carrito</button>
        </div>
    )
}
