import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = ({ producto }) => {
    const onAdd = (cant) =>
        console.log(`Cantidad: ${cant}`)
    return (
        <div className='tarjeta'>
            <h3>{producto.nombre}</h3>
            <img src={producto.foto} alt="" />
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default Item