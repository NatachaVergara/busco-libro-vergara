import React from 'react'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ item }) => {
    

    const onAdd = () => {
    console.log('Agregado')
}
    return (
        
        <div className="container d-flex justify-content-center" >
            <div className="card mt-2 mb-2 " style={{ width: "30rem" }} >
                <h3 className="card-title m-2 text-center fs-3 text-dark">{item.title}  </h3>
                <h4 className="text-center text-dark">Autor: {item.autor} </h4>
                <img src={item.pictureUrl} className="card-img-top container" style={{ width: "250px" }} alt="img" />
                <div className="card-body text-center">
                    <h4 className="text-center">Sinopsis</h4>
                    <p className="card-text text-dark"> {item.resumen}  </p>
                </div>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item text-dark fs-5">Stock disponible: {item.stock} unidades  </li>
                    <li className="list-group-item text-dark fs-5">Estado: {item.estado} </li>
                    <li className="list-group-item text-dark fs-5">Precio: ${item.price} </li>
                </ul>
                <div className ="card-body">
                   <ItemCount stock={item.stock} initial="1" title={item.title} onAdd={onAdd} />
                </div>
            </div>           
        </div>
    )
}

export default ItemDetail
