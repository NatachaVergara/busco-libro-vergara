/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ item, onAdd }) => {
   
    return (
        
        <div className="container d-flex justify-content-center" >
            <div className="card mt-2 mb-2 " style={{ width: "30rem" }} >
                <h3 className="card-title m-2 text-center fs-3">Titulo: {item.title}  </h3>
                <h4 className="text-center">Autor: {item.autor} </h4>
                <img src={item.pictureUrl} className="card-img-top container" style={{ width: "250px" }} alt="..." />{/**Queda por agregar la informacion de alt */}
                <div className="card-body text-center">
                    <h4 className="text-center">Sinopsis</h4>
                    <p className="card-text text-dark"> {item.resumen}  </p>
                </div>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item text-dark fs-5">Stock disponible: {item.stock} unidades  </li>{/**Queda por hacer la conexion con el item counter */}
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
//Nota: Traje el Componente ItemCount para ver como funcionaba..quedaria por ver como hacer para que dentro de la card mientras yo voy agregando stock se vea como va disminuyendo el stock de la linea 18 stock disponible. 