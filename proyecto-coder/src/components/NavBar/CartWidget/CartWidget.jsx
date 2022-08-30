import carrito from '../../../img/carrito.svg'
import './CartWidget.css'
import { useCartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { cantidadTotal } = useCartContext()

  return (
    <div>
      <img src={carrito} alt="" className='carrito__logo' />

      {cantidadTotal() != 0 && cantidadTotal()}

    </div>

  )
}

export default CartWidget