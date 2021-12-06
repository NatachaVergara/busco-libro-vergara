import { useState } from 'react'
import firebase from 'firebase'
//Componentes
import { useCartContext } from '../../context/CartContext'
import ModalForm from '../Modal/Modal'
import postOrder from '../../utils/postOrder'
import CreateOrderForm from '../Forms/CreateOrderForm'
import { auth } from '../../service/fireBaseConfig'
import { Link } from 'react-router-dom'





const Checkout = () => {
    const [orderId, setOrderId] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailVal, setEmailVal] = useState('')
    const [tel, setTel] = useState('')
    const [user, setUser] = useState({});
    const { cartList, eraseCart, cantItem, totalPrice } = useCartContext()


    auth.onAuthStateChanged((currentUser) => {
        setUser(currentUser);
    });

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
    };



    const onHandleClick = () => {
        setTimeout(() => {
            setShowModal(true)
        }, 1000)
    };

    return (
        <div>
            {!user ?
                <div className="d-flex flex-column align-items-center mt-5">
                    <Link to={'/register'}>
                        <button type="button"
                            className="btn btn-info mb-5">
                            Registrarse
                        </button>
                    </Link>

                    <Link to={'/login'}>
                        <button type="button"
                            className="btn btn-info">
                            Login
                        </button>
                    </Link>
                </div>
                :
                <div className="card container vw-100 mt-3 mb-5 text-center ">
                    <h4 className="card-title mt-3  ">Finalizar compra</h4>
                    <div className="row d-flex align-items-center mb-3">
                        <div>
                            {cartList.map(item =>
                                <img src={item.pictureUrl} alt="img" className="col-1 me-1 mt-1 mb-2 rounded" style={{ width: "150px", height: "150px" }} />)
                            }
                            <h6 className="card-subtitle mb-2 text-muted">Productos en total {cantItem()} </h6>
                            <p className="card-text">La suma total de su orden es : ${totalPrice()}  </p>
                        </div>

                    </div>

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
            }
            <ModalForm show={showModal}
                nombre={name}
                onHide={handleHide}
                orderid={orderId}
                total={totalPrice()}
            />
        </div>
    )
}

export default Checkout
