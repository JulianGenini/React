import React from 'react'
import { useState, useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'Firebase/firestore'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { detalleId } = useParams()


    useEffect(() => {
        const db = getFirestore()
        const queryProduct = doc(db, 'productos', detalleId)
        getDoc(queryProduct)
            .then(resp => setProducto({ id: resp.id, ...resp.data() }))
    }, [detalleId])


    /* useEffect(() => {
        getFetch(detalleId)
            .then(respuesta => setProducto(respuesta))
    }, []) */

    console.log(producto);

    return (
        <div>
            {
                <ItemDetail producto={producto} />
            }
        </div>
    )
}

export default ItemDetailContainer