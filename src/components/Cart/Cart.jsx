
import { useCartContext } from '../../context/CartContext'
import '../../index.css'
import { CartEmpty } from './CartEmpty'
export const Cart = () => {

    const { cartList, eraseCart, eraseItem } = useCartContext()
    
    console.log(cartList)

    return (
        <div>
            
        
            {cartList.length === 0 ? <CartEmpty h1="Carrito de compra vacío" /> :
                
                cartList.map(item =>
                <div className="ms-md-5 ps-md-5">
                    <table className="table table-hover container">
                        <thead >
                            <tr>
                                <th scope="col"></th>
                                <th scope="col" id={item.id} key={item.id}>Libro</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Sub total</th>
                                <th scope="col">
                                        <i className="bi bi-trash-fill text-dark deletBtn" onClick={eraseItem}></i>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                                <tr  className="table-active">
                                    <th scope="row"></th>
                                    <td>{item.autor} : <br/>
                                        {item.title}</td>
                                    <td>{item.cantidad}</td>
                                    <td>{item.price}</td>
                                    <td>{item.price}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                )
            }

            
            {
                cartList.length === 0 ? null :
                <button type="button" className="btn btn-outline-secondary ms-5" onClick={eraseCart}>Eliminar carrito</button>
            
            }
            
        </div>
    )
}
