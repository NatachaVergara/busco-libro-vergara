
import { useCartContext } from '../../context/CartContext'

export const Cart = () => {

    const { cartList } = useCartContext()

    console.log(cartList)

    return (
        <div>
            <h1 className="container">Carrito de compra</h1>
        
            {
                cartList.map(item =>
                    <div className="w-50ms-md-5 ps-5" key={item.id}>
                    <table class="table table-hover container">
                        <thead >
                            <tr>
                                <th scope="col">Libro</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">
                                <button className="btn btn-outline-dark" >Eliminar</button>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr key={item.id} className="table-active">
                                <th scope="row">{item.autor}</th>
                                <td>{item.cantidad}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                )}


        </div>
    )
}
