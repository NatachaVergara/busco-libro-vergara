/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import '../../index.css'
import { CartEmpty } from './CartEmpty'
import firebase from 'firebase'
import { getFirestore } from '../../service/fireBaseConfig'

export const Cart = () => {
    const [formData, setFormData] = useState({})

    const { cartList, eraseCart, eraseItem, cantItem, totalPrice } = useCartContext()

    const generarOrden = (e) => {
        e.preventDefault();
        const order = {}


        order.buyer = formData
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
            .then(resp => console.log(`Su orden fue procesada, su numero de id es: ${resp.id}`))
            .catch(err => console.log(err))

        //Actualiza todos los items que estan en el listado de Cart del cartContext
        const itemsToUpdate = dbQ.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.id))


        const batch = dbQ.batch();
        console.log(batch)

        //Por cada item, restarl del stockla cantidad de el carrito
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
        console.log(order)
        eraseCart()
    }


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.nombre]: e.target.value,
            [e.target.apellido]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.tel]: e.target.value,
            [e.target.direccion]: e.target.value,
            [e.target.codigoPostal]: e.target.value

        })
    }
    console.log(formData)

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
                            <button type="button" className="btn btn-outline-danger ms-5 ">  Seguir comprando </button>
                        </Link>
                        <div className="card container vw-100 mt-3 mb-5 text-center ">
                            <div className="card-body">
                                <h4 className="card-title">Comprar Carrito</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Cantidad de productos: {cantItem()} </h6>
                                <p className="card-text">Total: {totalPrice()}  </p>


                                <form onSubmit={generarOrden}
                                    onchange={handleChange}
                                    className="container">
                                    <div class="col-md-6">
                                        <label for="nombre" className="form-label">Nombre</label>
                                        <input type="text" value={formData.nombre} className="form-control" id="nombre" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="apellido" className="form-label">Apellido</label>
                                        <input type="text" value={formData.apellido} className="form-control" id="apellido" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="email" className="form-label">Email</label>
                                        <input type="email" value={formData.email} className="form-control" id="email" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="tel" className="form-label">Teléfono</label>
                                        <input type="number" value={formData.tel} className="form-control" id="tel" />
                                    </div>
                                    <div class="col-12">
                                        <label for="inputAddress" className="form-label">Direccion</label>
                                        <input type="text" value={formData.direccion} className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>

                                    <div class="col-md-2">
                                        <label for="codigoPostal" className="form-label">Código Postal</label>
                                        <input type="number" value={formData.codigoPostal} className="form-control" id="codigoPostal" />
                                    </div>

                                    <button className="card-link" >Terminar compra</button>

                                </form>


                            </div>
                        </div>
                    </>

            }



        </div>
    )
}
