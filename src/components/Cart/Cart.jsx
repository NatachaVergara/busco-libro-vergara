import { Link } from 'react-router-dom'
//Componentes
import { useCartContext } from '../../context/CartContext'
import CartEmpty from './CartEmpty'


const Cart = () => {
    const { cartList, eraseCart, eraseItem } = useCartContext()


    
    return (
        <div>
            {cartList.length === 0 ?
                <CartEmpty h1="Su carrito está vacío" /> :
                cartList.map(item =>
                    <div key={item.id} className="mt-2 ms-md-4 ps-md-4  ms-lg-5 ps-lg-5">
                        <table key={item.id} className="table table-hover container">
                            <thead >
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col" key={item.id}>Libro</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Sub total</th>
                                    <th scope="col">
                                        <i className="bi bi-trash-fill text-dark deletBtn fs-3" onClick={() => eraseItem(item.id)}></i>
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-active">
                                    <th scope="row"></th>
                                    <td className="td">{item.autor}  <br />
                                        {item.title}</td>
                                    <td>{item.cantidad}</td>
                                    <td>${item.price}</td>
                                    <td>${item.price * item.cantidad}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            }
            {
                cartList.length === 0 ? null :
                    <>
                        <button type="button"
                            className="btn btn-outline-secondary ms-5"
                            onClick={eraseCart}>Eliminar carrito
                        </button>
                        <Link to='/'
                            className="card-link m-5">
                            <button
                                type="button"
                                className="btn btn-outline-success mt-2 mt-md-0 ms-md-5 ">  Seguir comprando
                            </button>
                        </Link>
                        <Link to='/checkout'
                            className="card-link m-5">
                            <button
                                type="button"
                                className="btn btn-outline-success mt-2 mt-md-0 ms-md-5 ">  Finalizar Compra
                            </button>
                        </Link>
                    </>
            }








        </div>
    )
}
export default Cart