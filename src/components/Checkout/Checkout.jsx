import { useState } from 'react'
import firebase from 'firebase'
//Componentes
import { useCartContext } from '../../context/CartContext'
import ModalForm from '../Modal/Modal'
import postOrder from '../../utils/postOrder'
import CreateOrderForm from '../Forms/CreateOrderForm'
const Checkout = () => {
    const [orderId, setOrderId] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailVal, setEmailVal] = useState('')
    const [tel, setTel] = useState('')
    const { cartList, eraseCart, cantItem, totalPrice } = useCartContext()


    const createOrder = (e) => {
        e.preventDefault();

        const order = {}
        order.buyer = { name, email, tel }
        order.total = totalPrice()
        order.date = firebase.firestore.Timestamp.fromDate(new Date())
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const title = cartItem.title
            const price = cartItem.price * cartItem.cantidad
            return { id, title, price }
        })


        //traigo la función con el envió de la orden a la db
        postOrder(order, setOrderId, cartList)

    };


    //Permite mostrar el modal cuando doy terminar orden y me borra el carrito de compra
    const handleHide = () => {
        setShowModal(false)
        eraseCart()
    }

    

    const onHandleClick = () => {
        setTimeout(() => {
            setShowModal(true)
        }, 1000);
       
       

    }
    return (
        <>
            <div
                className="card container vw-100 mt-3 mb-5 text-center ">
                <div className="card-body">
                    <h4 className="card-title">Finalizar compra</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Cantidad de productos: {cantItem()} </h6>
                    <p className="card-text">Total: {totalPrice()}  </p>
                    <CreateOrderForm
                        createOrder={createOrder}
                        name={name}
                        setName={setName}
                        tel={tel}
                        setTel={setTel}
                        email={email}
                        setEmail={setEmail}
                        emailVal={emailVal}
                        setEmailVal={setEmailVal}
                        onHandleClick={onHandleClick}
                    />
                </div>
            </div>
            <ModalForm show={showModal}
                nombre={name}
                onHide={handleHide}
                orderId={orderId}
                total={totalPrice()} />
        </>
    )
}

export default Checkout
