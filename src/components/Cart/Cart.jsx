/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import '../../index.css'
import { CartEmpty } from './CartEmpty'
import firebase from 'firebase'
import { getFirestore } from '../../service/fireBaseConfig'
import CompraFinalizada from '../ModalCompra/CompraFinalizada'
import Spiner from '../Spinner/Spinner'

export const Cart = () => {
    const [orderId, setOrderId] = useState(null)
    //const [loading, setLoading] = useState(true)
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



        const dbQ = getFirestore()
        const orders = dbQ.collection('orders')

        //Creo una colleccion llamada orders donde se va a ir guardando cada orden de compra realizada
        orders.add(order)
            //guardarlo dentro de un estado! y asi despues puedo sacar el id
            .then((res) => {
                setOrderId(res.id) //No me actualiza el valor de orderID

            })
            .catch(err => console.log(err))
        //.finally(() => setLoading(false))


        //Actualiza todos los items que estan en el listado de Cart del cartContext
        const itemsToUpdate = dbQ.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.id))


        const batch = dbQ.batch();


        //Por cada item, restar del stockla cantidad de el carrito
        itemsToUpdate.get()
            .then(collection => {
                collection.docs.forEach(docSnapshot => {
                    batch.update(docSnapshot.ref, {
                        stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
                    })
                })
                batch.commit().then(res => {

                    console.log(`Stock actualizado`)
                })

            })


    }

    const handleHide = () => {
        setShowModal(false)
        eraseCart()
    }



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
                        <button type="button" className="btn btn-outline-secondary ms-5 " onClick={eraseCart}>Eliminar carrito</button>
                        <Link to='/' className="card-link m-5">
                            <button type="button" className="btn btn-outline-danger mt-2 mt-md-0 ms-md-5 ">  Seguir comprando </button>
                        </Link>
                        <div className="card container vw-100 mt-3 mb-5 text-center ">
                            <div className="card-body">
                                <h4 className="card-title">Comprar Carrito</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Cantidad de productos: {cantItem()} </h6>
                                <p className="card-text">Total: {totalPrice()}  </p>
                                <form onSubmit={generarOrden}
                                    className="container cartForm">
                                    <div class="col-md-6 ">
                                        <label for="nombre" className="form-label">Nombre</label>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="nombre" />
                                    </div>

                                    <div class="col-md-6 ">
                                        <label for="email" className="form-label">Email</label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" />
                                    </div>
                                    <div class="col-md-6 ">
                                        <label for="tel" className="form-label">Teléfono</label>
                                        <input type="text" value={tel} onChange={(e) => setTel(e.target.value)} className="form-control" id="tel" />
                                    </div>
                                    <button className="card-link m-2" onClick={() => setShowModal(true)} >Terminar compra</button>
                                </form>
                            </div>
                        </div>
                        <CompraFinalizada show={showModal} onHide={handleHide} orderId={orderId} total={totalPrice()} />
                    </>

            }



        </div>
    )
}
