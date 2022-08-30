import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getFirestore } from "Firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import './Cart.css'

const Cart = () => {

  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } = useCartContext()
  const [id, setId] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    rEmail: '',
    name: '',
    phone: ''
  })

  const generateOrder = (e) => {
    if (formData.email === '' || formData.name === '' || formData.phone === "" || formData.rEmail === '') {

      alert('Ha ingresado los datos erroneamente')

    } else {
      e.preventDefault()
    }

    const order = {}
    order.buyer = formData


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
      .finally(() => {
        vaciarCarrito()
        setFormData({
          email: '',
          rEmail: '',
          name: '',
          phone: ''
        })
      })

  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value

    })
  }

  return (
    <>
      {cartList == 0 ? (
        <div className="emptyCart">
          <h2>El carrito está vacío</h2>
          <Link to="/">
            <button>
              Volver al inicio
            </button>
          </Link>
        </div>
      ) : (

        <div className="cart">


          <div className="cart__order">

            {cartList.map(item => (
              <div className="order" key={item.id}>
                <img src={item.foto} alt="foto producto" /> <br />
                Producto: {item.nombre} <br /> Cantidad: {item.cantidad} <br /> Subtotal: {item.cantidad * item.precio} <br />
                <button onClick={() => eliminarProducto(item.id)}>Eliminar producto</button>
              </div>
            ))}

            <div>
              <h4>{precioTotal() != 0 && `Precio Total: ${precioTotal()}`}</h4>
            </div>

            <button onClick={vaciarCarrito}>Vaciar el carrito</button>

          </div>

          <div >
            <form className="cart__form" onSubmit={generateOrder}>

              <label><strong>Complete sus datos para realizar el pedido</strong></label>
              <div>
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Ingrese el nombre"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div>
                <label>Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  onChange={handleChange}
                  placeholder="Ingrese el teléfono"
                  value={formData.phone}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter email"
                  value={formData.email}
                />

              </div>
              <div>
                <label>Repetir Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="rEmail"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={formData.rEmail}
                />
              </div>
              <button type="submit">Crear la orden</button>
            </form>
          </div>
        </div>

      )}

      {id.length > 0 && <h2 className="idOrden">El id de su orden es:  {id}</h2>}




    </>
  )

}

export default Cart
