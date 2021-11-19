/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import '../../index.css'
import { CartEmpty } from './CartEmpty'
export const Cart = () => {
    
    const { cartList, eraseCart, eraseItem, cantItem, sumaPrecioItems } = useCartContext()

    console.log(cartList)

    return (
        <div>
            {cartList.length === 0 ? <CartEmpty h1="Su carrito está vacío" /> :

                cartList.map(item =>
                    <div className="mt-2 ms-md-4 ps-md-4  ms-lg-5 ps-lg-5">
                        <table className="table table-hover container">
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
                                    <td className="td">{item.autor} : <br />
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
                        <button type="button" className="btn btn-outline-secondary ms-5 " onClick={eraseCart}>Eliminar carrito</button>

                        <div className="card container w-50 mt-3 mb-5 text-center ">
                            <div className="card-body">
                                <h4 className="card-title">Comprar Carrito</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Cantidad de productos: {cantItem()} </h6>
                                <p className="card-text">Total:   </p>
                                <Link to='/checkOut' className="card-link">Terminar compra</Link>
                                <Link to='/' className="card-link">Seguir comprando</Link>
                            </div>
                        </div>
                    </>

            }



        </div>
    )
}
