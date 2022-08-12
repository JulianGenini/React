import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
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

/*   //para Firebase
  const [producto, setProducto] = useState({})
 */
  console.log(categoriaId);


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




  /*   useEffect(() => {
      const db = getFirestore()
      const queryCollection = collection(db, 'productos')
      getDocs(queryCollection)
        //un nuevo array desde la respuesta de FS
        .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])
  
    console.log(productos); */



  /*  useEffect(() => {
 
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
     
   }, [categoriaId]) */

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