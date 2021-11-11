import React from 'react';
const CartWidget = () => {
    return (
        <div >
            <button type="button"
                className="btn btn-link text-decoration-none ms-xl-4">
                <i className="bi bi-cart4 text-black fs-3 ">
                    <span clasName="fs-5"> 0 </span>
                </i>
            </button>
        </div>
    )
}

export default CartWidget
