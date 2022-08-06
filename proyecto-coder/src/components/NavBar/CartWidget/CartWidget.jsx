import carrito from '../../../img/carrito.svg'
import './CartWidget.css'
import { useCartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { cantidadTotal } = useCartContext()

  return (
    <div>
      <img src={carrito} alt="" className='carrito__logo' />
      <div><Link to='/cart'>

        {cantidadTotal() != 0 && cantidadTotal()}
        
        </Link>

      </div>
    </div>

  )
}

export default CartWidget