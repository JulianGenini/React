import { Link } from 'react-router-dom'

const Boton = () => {
  return (
    <div>
      <Link to='/cart'>
        <input type="button" value="Finalizar la compra" className="boton" />
      </Link>
    </div>
  )
}

export default Boton