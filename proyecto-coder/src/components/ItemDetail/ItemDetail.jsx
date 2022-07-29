import { useState } from 'react'
import Boton from '../Boton/Boton'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ producto }) => {

    const onAdd = (cant) => {
        console.log(`Cantidad: ${cant}`)
        setInputType('input')
    }

    const [inputType, setInputType] = useState ('button')

    return (
        <div className='ItemDetail'>
            <h3>{producto.nombre}</h3>
            <p>Categoria: {producto.categoria}</p>
            <img src={producto.foto} alt="foto del producto" />
            <p>Precio: {producto.precio}</p>
            {
            inputType==='button' ?
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
            :
            <Boton/>
            }
            
        </div>
    )
}
export default ItemDetail