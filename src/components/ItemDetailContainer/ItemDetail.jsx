import React from 'react'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ item }) => {


    const onAdd = () => {
        console.log('Agregado')
    }
    return (

        <div className="animate__animated animate__fadeInDown container d-flex justify-content-center" >
            <div className="card mt-2 mb-2 d-md-flex flex-md-row" >
                <div className="d-flex flex-column justify-content-center" >
                    <h6 className="text-center text-dark mt-3"> {item.autor} </h6>
                    <img src={item.pictureUrl} className="card-img-top container" style={{ width: "150px", height: "150px" }} alt="img" />
                    <div className="card-body d-flex flex-column justify-content-center">
                        <ItemCount stock={item.stock} initial="1" title={item.title} onAdd={onAdd} />
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
                </div>


            </div>

        </div>
    )
}

export default ItemDetail
