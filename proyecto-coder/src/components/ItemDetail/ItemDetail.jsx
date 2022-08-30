import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import Boton from '../Boton/Boton'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {

    const {agregarCarrito, cartList } = useCartContext()

    const [finalizar, setFinalizar] = useState (true)

    const onAdd = (cant) => {
        setFinalizar(false)
        agregarCarrito({...producto, cantidad: cant})
    }
    
    return (

        <div className='ContainerItemDetail'>
        <div className='ItemDetail'>
            <h3>{producto.nombre}</h3>
            <p>Categoria: {producto.categoria}</p>
            <img src={producto.foto} alt="foto del producto" />
            <p>Precio: {producto.precio}</p>
              
        {
            finalizar===true ?
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
            :
            <Boton/>
            }
            
        </div>

        </div>
    )
}
export default ItemDetail