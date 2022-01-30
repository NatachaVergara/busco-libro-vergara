import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {
    const { cantItem, totalPrice } = useCartContext()

    return (
        <div >
              <button type="button"
                className="btn btn-link text-decoration-none ms-xl-4">
                <i className="bi bi-cart4 text-black fs-3 ">                    
                    <span className="fs-3"> {cantItem() !== 0 && cantItem()} <span className="fs-6"> ${totalPrice()} </span> </span>
                    
                </i>
            </button>
        </div>
    )
}

export default CartWidget
