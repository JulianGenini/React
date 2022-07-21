import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getFetch } from '../../helpers/getFetch'


const ItemList = () => {
    const [productos, setProductos] = useState([])
    //msj cargando
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch()
            .then(respuesta => setProductos(respuesta))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {loading ? <p>Cargando...</p>
                :
                productos?.map(producto => 
                
                <div key={producto.id} className='tarjeta'>
                    <h3>{producto.nombre}</h3>
                    <img src={producto.foto} alt="" />
                           
                </div> )}
        </div>
    )
}

export default ItemList