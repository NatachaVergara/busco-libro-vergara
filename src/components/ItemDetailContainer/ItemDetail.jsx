/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ item }) => {
   
    return (
        
        <div className="container d-flex justify-content-center">
           
            <div className="card mt-2 mb-2" style={{width: "30rem"}}>
                <img src={item.pictureUrl} className="card-img-top" alt="..." />{/**Queda por agregar la informacion de alt */}
                <div className ="card-body">
                <h5 className ="card-title">Titulo: {item.title}  </h5>
                <p className ="card-text"> {item.resumen}  </p>
                </div>
                <ul className ="list-group list-group-flush">
                    <li className="list-group-item text-dark">Stock disponible: {item.stock}  </li>{/**Queda por hacer la conexion con el item counter */}
                <li className ="list-group-item text-dark">Estado: {item.estado} </li>
                </ul>
                <div className ="card-body">
                   <ItemCount stock={item.stock} initial="1" title={item.title} />
                </div>
            </div>
           
        </div>
    )
}

export default ItemDetail
//Nota: Traje el Componente ItemCount para ver como funcionaba..quedaria por ver como hacer para que dentro de la card mientras yo voy agregando stock se vea como va disminuyendo el stock de la linea 18 stock disponible. 