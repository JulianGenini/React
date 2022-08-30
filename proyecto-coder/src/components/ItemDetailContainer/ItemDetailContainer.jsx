import React from 'react'
import { useState, useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'Firebase/firestore'

import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { detalleId } = useParams()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const db = getFirestore()
        const queryProduct = doc(db, 'productos', detalleId)
        getDoc(queryProduct)
            .then(resp => setProducto({ id: resp.id, ...resp.data() }))
            .finally(() => setLoading(false))
    }, [detalleId])


    return (
        <div>
            {loading ? <p>Cargando...</p>
                :
                <ItemDetail producto={producto} />
            }
        </div>
    )
}

export default ItemDetailContainer