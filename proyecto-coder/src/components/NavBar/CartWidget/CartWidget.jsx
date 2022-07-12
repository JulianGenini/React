import carrito from '../../../img/carrito.svg'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <a className='carrito' href='#'>
        <img src={carrito} alt="" className='carrito__logo' />

    </a>
  )
}

export default CartWidget