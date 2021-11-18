/* eslint-disable no-unused-vars */
import {  useState } from 'react'
import { Link } from 'react-router-dom'
import {  useCartContext } from '../../context/CartContext'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ item }) => {
    const [wasClick, setWasClick] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [count, setCount] = useState(1)

    const { cartList, agregarCarrito } = useCartContext()
        

    const onAdd = (count) => {
        setCount(count)
        agregarCarrito({ ...item, item , cantidad: count })
        setWasClick(true)
        
    }

    

   

    return (

        <div className="animate__animated animate__fadeInDown container d-flex justify-content-center" >
            <div className="card mt-2 mb-2 d-md-flex flex-md-row" >
                <div className="d-flex flex-column justify-content-center" >
                    <h6 className="text-center text-dark mt-3"> {item.autor} </h6>
                    <img src={item.pictureUrl} className="card-img-top container" style={{ width: "150px", height: "150px" }} alt="img" />
                    <div className="card-body d-none d-md-flex flex-column justify-content-center">
                     

                        {wasClick === false ?                            
                            <ItemCount                               
                                onAdd={onAdd}
                                initial={1}
                                stocks={item.stock}
                               
                            /> :
                            <ul >
                                <Link to='/'><button type="button" class="btn btn-danger mb-1">Seguir comprando</button></Link>
                                <Link to='/cart'><button type="button" class="btn btn-danger">Ir al carrito de compra</button></Link>
                            </ul>
                        }

                    </div>
                </div>

                <div className="card-body text-center">
                    <h1 className="card-title ms-2 mb-3 text-center text-dark"> {item.title}  </h1>
                    <h4 className="text-center" >Sinopsis</h4>
                    <p className="card-text text-dark"> {item.resumen}  </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-dark fs-5">Stock disponible: {item.stock} unidades  </li>
                        <li className="list-group-item text-dark fs-5">Estado: {item.estado} </li>
                        <li className="list-group-item text-dark fs-5">Precio: ${item.price} </li>
                    </ul>
                    <div className="card-body d-flex d-md-none flex-column justify-content-center">
                        {wasClick === false ?
                            <ItemCount
                                onAdd={onAdd}
                                initial={1}
                                stocks={item.stock}

                            /> :
                            <ul >
                                <Link to='/'><button type="button" class="btn btn-danger me-1 mb-1">Seguir comprando</button></Link>
                                <Link to='/cart'><button type="button" class="btn btn-danger">Terminar compra</button></Link>
                            </ul>
                        }
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ItemDetail
