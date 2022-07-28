import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ producto }) => {

    return (
        <div className='tarjeta'>
            <h3>{producto.nombre}</h3>
            <img src={producto.foto} alt="" />

            <Link to={`/detalle/${producto.id}`}>
                <button>Detalle del producto</button>
            </Link>

        </div>
    )
}

export default Item