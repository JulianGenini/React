import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { collection, getDocs, getFirestore, query, where } from 'Firebase/firestore'


const ItemListContainer = () => {

  /*   convertirla en global
   */
  const [productos, setProductos] = useState([])
  //msj cargando
  const [loading, setLoading] = useState(true)

  /*   capturar la categoria */
  const { categoriaId } = useParams()


  const getProductsFirestore = (categoriaId) => {
    const db = getFirestore()
    const queryCollection = collection(db, 'productos')
    const queryCollectionFilter = categoriaId ? query(queryCollection, where('categoria', '==', categoriaId)) : queryCollection

    getDocs(queryCollectionFilter)
      .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getProductsFirestore(categoriaId)
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