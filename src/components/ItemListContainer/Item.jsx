import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ id, title, price, pictureUrl, stock }) => {

    return (

        <div className="animate__animated animate__zoomIn col-sm-12 col-md-6 col-lg-4"
            id={id}>
            <div className="card mb-3">
                <p className="card-header text-dark">{title} </p>
                <img src={pictureUrl} className="card-img-top container mb-3 mt-2"
                    style={{ width: "250px", height: "250px" }} alt="img" />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-dark">Precio: $ {price} </li>


                    {stock === 0 ? <li className="list-group-item text-dark">Fuera de stock </li> :
                        <li className="list-group-item text-dark">Stock: {stock} </li>
                    }


                </ul>
                <Link to={`/item/${id}`}
                    type="button"
                    className="btn btn-outline-success text-dark">Ver</Link>
            </div>
        </div>

    )
}

export default Item
