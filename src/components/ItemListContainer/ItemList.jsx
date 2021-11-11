import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
    return (
        <div className="container  mt-2 mt-md-5" >
            <div className="row ">
                {items.map(item => <Item key={item.id} id={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl} />)}

            </div>
        </div>
    )
}

export default ItemList
