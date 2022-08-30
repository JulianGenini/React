import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="menu">

      <Link to='/'>
        <h1 className="menu__titulo">Resto Reserva</h1>
      </Link>

      <div className="menu__container">

        {/*   con nav link se activa un estilo nuevo al presionarlo  */}
        <NavLink to='/categoria/Entradas'
          className={({ isActive }) => isActive ? 'boton-activo' : 'menu__container__botones'}>Entradas</NavLink>

        <NavLink to='/categoria/Plato principal'
          className={({ isActive }) => isActive ? 'boton-activo' : 'menu__container__botones'}>Plato Principal</NavLink>

        <NavLink to='/categoria/Postre'
          className={({ isActive }) => isActive ? 'boton-activo' : 'menu__container__botones'}>Postre</NavLink>

        <NavLink to='/categoria/Bebidas'
          className={({ isActive }) => isActive ? 'boton-activo' : 'menu__container__botones'}>Bebidas</NavLink>

        <Link to='/cart'>
          <CartWidget />
        </Link>

      </div>
    </nav>

  )
}

export default NavBar
