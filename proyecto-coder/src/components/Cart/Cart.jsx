import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getFirestore } from "Firebase/firestore"
import { useState } from "react"

const Cart = () => {

  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } = useCartContext()
  const [id, setId] = useState('')
  const generateOrder = (e) => {
    e.preventDefault()

    const order = {}
    order.buyer = { email: 'asd@asd.com', name: 'Julian', phone: '154521' }
    order.productos = cartList.map(prod => {
      return {
        product: prod.nombre,
        id: prod.id,
        price: prod.precio
      }
    })

    order.total = precioTotal()


      //guardar orden en db

    const db = getFirestore()
    const queryOrders = collection(db, 'orders')
    addDoc(queryOrders, order)
      .then(resp => setId(resp.id))
      .catch(err => console.log(err))
      //para mostrar el id:
      //guardarlo en un estado
      //con un condicional, cuando este el estado mostrarlo
      .finally(() => vaciarCarrito())

  }

 
  
  if ({id}) {
    return (
      <div>
        <h3>Resumen de la compra</h3>

        <div>
          {cartList.map(item => (
            <div key={item.id}>
              <img src={item.foto} alt="foto producto" />
              Producto: {item.nombre} Cantidad: {item.cantidad} Subtotal: {item.cantidad * item.precio}
              <button onClick={() => eliminarProducto(item.id)}>Eliminar producto</button>
            </div>
          ))}

        </div>
        <div>
          <h4>{precioTotal() != 0 && `Precio Total: ${precioTotal()}`}</h4>
        </div>

        <button onClick={vaciarCarrito}>Vaciar el carrito</button>

        <div>
          <form onSubmit={generateOrder}>

            <button type="submit">Crear la orden</button>

          </form>

        </div>

        <div>
          {id.length > 0 && <h2>Su orden fue creada <br/>Transacción: {id}</h2>}
        </div>

      </div>

    )

  } else {
    return (
      <h2>El carrito está vacío</h2>
    )
  }


}

export default Cart



