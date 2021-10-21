

import ItemCounter from "./ItemCounter/ItemCounter"



const ItemListComponent = ({ titulo }) => {
    
    return (
        <div>
            <h1 className="container  mx-md-2 my-5 text-center" >{titulo} </h1>
            <ItemCounter stock="20" initial="0"  />
        </div>
    )
}

export default ItemListComponent


