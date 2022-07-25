import React from 'react'


const ItemDetail = ({ producto }) => {


    return (
        <div className='ItemDetail'>
            <h3>{producto.nombre}</h3>
            <img src={producto.foto} alt="" />
            <p>Precio: {producto.precio}</p>
        </div>
    )
}
export default ItemDetail




