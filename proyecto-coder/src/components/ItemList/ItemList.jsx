import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getFetch } from '../../helpers/getFetch'


const ItemList = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getFetch()
            .then(respuesta => setProductos(respuesta))
            .catch(err => console.log(err))
            .finally(() => console.log('finally'))
    }, [])

    console.log(productos);


    return (
        <div>ItemList</div>
    )
}
