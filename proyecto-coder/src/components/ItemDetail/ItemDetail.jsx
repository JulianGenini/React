import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ producto }) => {

    const onAdd = (cant) =>
        console.log(`Cantidad: ${cant}`)

    return (
        <div className='ItemDetail'>
            <h3>{producto.nombre}</h3>
            <p>Categoria: {producto.categoria}</p>
            <img src={producto.foto} alt="foto del producto" />
            <p>Precio: {producto.precio}</p>

            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}
export default ItemDetail




