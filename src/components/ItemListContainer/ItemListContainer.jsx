
import ItemCount from "../ItemCount/ItemCount"



const ItemListContainer = ({ titulo }) => {
    // eslint-disable-next-line no-unused-vars
   
    
    //Funcion para agregar items al carrito al momento de utilizar el btn del itemContainer
    //No creo que este bien aplicado pero por ahora es lo que se me ocurrio agregar
    const onAdd = () => {        
        (console.log('Item Agregado'))        
    }

    return (
        <div>
            <h1 className="container  mx-md-2 my-5 text-center" >{titulo} </h1>
            <ItemCount stock="5" initial="1" onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer


