import React from 'react'
import { useState, useEffect } from 'react'
import { getFetch } from '../../helpers/getFetch'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {
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
      {
        loading ? <p>Cargando...</p>
          :
          <ItemList productos={productos} />
      }

    </div>
  )
}

export default ItemListContainer