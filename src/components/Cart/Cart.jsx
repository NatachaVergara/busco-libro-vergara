/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
//Componentes
import { useCartContext } from '../../context/CartContext'
import CartEmpty from './CartEmpty'
import CompraFinalizada from '../ModalCompra/CompraFinalizada'
import postOrder from '../../Utils/postOrder'

const Cart = () => {
    const [orderId, setOrderId] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')




    const { cartList, eraseCart, eraseItem, cantItem, totalPrice } = useCartContext()


    const generarOrden = (e) => {
        e.preventDefault();

        const order = {}
        order.buyer = { name, email, tel } //formData
        order.total = totalPrice()
        order.date = firebase.firestore.Timestamp.fromDate(new Date())
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const title = cartItem.title
            const price = cartItem.price * cartItem.cantidad
            return { id, title, price }
        })


        //traigo la función con el envió de la orden a la db
        const post = postOrder(order, setOrderId, cartList)

    };


    //Permite mostrar el modal cuando doy terminar orden y me borra el carrito de compra
    const handleHide = () => {
        setShowModal(false)
        eraseCart()
    }



    return (
        <div>
            {cartList.length === 0 ?
                <CartEmpty h1="Su carrito está vacío" /> :
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
                            className="btn btn-outline-secondary ms-5 "
                            onClick={eraseCart}>Eliminar carrito
                        </button>
                        <Link to='/'
                            className="card-link m-5">
                            <button
                                type="button"
                                className="btn btn-outline-danger mt-2 mt-md-0 ms-md-5 ">  Seguir comprando
                            </button>
                        </Link>
                        <div
                            className="card container vw-100 mt-3 mb-5 text-center ">
                            <div className="card-body">
                                <h4 className="card-title">Comprar Carrito</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Cantidad de productos: {cantItem()} </h6>
                                <p className="card-text">Total: {totalPrice()}  </p>
                                <form
                                    onSubmit={generarOrden}
                                    className="container cartForm">
                                    <div class="col-md-6 ">
                                        <label for="nombre" className="form-label">Nombre</label>
                                        <input type="text" placeholder="john Doe" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="nombre" />
                                    </div>

                                    <div class="col-md-6 ">
                                        <label for="email" className="form-label">Email</label>
                                        <input type="email" placeholder="email@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" />
                                    </div>
                                    <div class="col-md-6 ">
                                        <label for="tel" className="form-label">Teléfono</label>
                                        <input type="text" placeholder="01144418775 / 1524971896" value={tel} onChange={(e) => setTel(e.target.value)} className="form-control" id="tel" />
                                    </div>
                                    <button className="card-link m-2 btn btn-success"
                                        disabled={name.length === 0 || email.length === 0 || tel.length === 0}
                                        onClick={() => setShowModal(true)} >Terminar compra</button>
                                </form>
                            </div>
                        </div>
                        <CompraFinalizada show={showModal} nombre={name} onHide={handleHide} orderId={orderId} total={totalPrice()} />
                    </>

            }



        </div>
    )
}
export default Cart