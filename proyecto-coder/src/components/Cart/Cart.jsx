import { useCartContext } from "../../context/CartContext"

const Cart = () => {

  const { cartList, vaciarCarrito } = useCartContext()

  return (
    <div>
      <h3>Resumen de la compra</h3>
      <ul>
        {cartList.map(item => (
          <li key={item.id}>
            {item.nombre} {item.cantidad} Subtotal: {item.cantidad * item.precio} 
          </li>
        ))}
      </ul>

          <button onClick={vaciarCarrito}>Vaciar el carrito</button>

    </div>
  )
}

export default Cart



