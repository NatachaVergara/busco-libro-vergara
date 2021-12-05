import { Link } from 'react-router-dom'
import "../../index.css"
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
                    <div className="d-flex  flex-column ms-5 flex-md-row justify-content-center ">
                        <div className="me-md-3 mb-2">
                        <button type="button"
                            className="btn btn-outline-secondary  "
                            onClick={eraseCart}> Eliminar carrito
                        </button>
                        </div>
                        <div className=" me-md-3 mb-2">
                        <Link to='/'
                            className="card-link">
                            <button
                                type="button"
                                className="btn btn-outline-success">  Seguir comprando
                            </button>
                            </Link>
                        </div>
                        <div className="me-md-3">
                        <Link to='/checkout' className="card-link" >
                            <button
                                type="button"
                                className="btn btn-outline-success btnFinalizar">  Finalizar Compra
                            </button>
                            </Link>
                        </div>
                    </div>
            }








        </div>
    )
}
export default Cart