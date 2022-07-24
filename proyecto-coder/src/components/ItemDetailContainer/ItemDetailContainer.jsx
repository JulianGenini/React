import React from 'react'
import { useState, useEffect } from 'react'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { detalleId } = useParams()

    useEffect(() => {
        getFetch(detalleId)
            .then(respuesta => setProducto(respuesta))

    }, [])

    console.log(producto);

    return (
        <div>
            {

                <ItemDetail />
            }

        </div>
    )
}

export default ItemDetailContainer