import { useCartContext } from "../../context/CartContext"

const Cart = () => {

  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } = useCartContext()

  if (precioTotal() != 0) {
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

      </div>
    )

  } else {

    return(
      <h2>El carrito está vacío</h2>
    )
    
  }

}

export default Cart



