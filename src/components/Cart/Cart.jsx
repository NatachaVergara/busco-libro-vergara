/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import '../../index.css'
import { CartEmpty } from './CartEmpty'
import { getFirestore } from '../../service/fireBaseConfig'

export const Cart = () => {
    //   const [formData, setFormData] = useState({})

    const { cartList, eraseCart, eraseItem, cantItem, totalPrice } = useCartContext()
  
    const generarOrden = (e) => {
        e.preventDefault();
        const order = {}

        order.buyer = { name: 'Natacha', email: 'natacha@gmail.com', tel: '44418770' }
        order.total = totalPrice()

        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const title = cartItem.title.title
            const price = cartItem.price * cartItem.cantidad
            return { id, title, price }
        })


        const dbQ = getFirestore()
        dbQ.collection('orders').add(order)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))


        console.log(order)

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
                        <Link to='/' className="card-link m-5"><button type="button" className="btn btn-outline-danger ms-5 ">  Seguir comprando </button></Link>
                        <div className="card container vw-100 mt-3 mb-5 text-center ">
                            <div className="card-body">
                                <h4 className="card-title">Comprar Carrito</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Cantidad de productos: {cantItem()} </h6>
                                <p className="card-text">Total: {totalPrice()}  </p>

                                <form onSubmit={generarOrden}>
                                    {/* <div class="col-md-6">
                                        <label for="nombre" class="form-label">Nombre</label>
                                        <input type="text" class="form-control" id="nombre"/>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="apellido" class="form-label">Apellido</label>
                                        <input type="text" class="form-control" id="apellido"/>
                                    </div>
                                    <div class="col-12">
                                        <label for="inputAddress" class="form-label">Direccion</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputCity" class="form-label">Ciudad</label>
                                        <input type="text" class="form-control" id="inputCity"/>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputState" class="form-label">Provincia</label>
                                        <select id="inputState" class="form-select">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <label for="inputZip" class="form-label">Zip</label>
                                        <input type="text" class="form-control" id="inputZip"/>
                                    </div> */}
                                    
                                    <button className="card-link" >Terminar compra</button>
                                </form>

                            </div>
                        </div>
                    </>

            }



        </div>
    )
}
