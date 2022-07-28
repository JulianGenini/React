import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  //msj cargando
  const [loading, setLoading] = useState(true)

/*   capturar la categoria */
  const { categoriaId } = useParams()
  console.log(categoriaId);

  useEffect(() => {

    if (categoriaId) {
      getFetch()
      .then(respuesta => setProductos(respuesta.filter(prod => prod.categoria === categoriaId)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }

    else {
      getFetch()
      .then(respuesta => setProductos(respuesta))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }
    
  }, [categoriaId])

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