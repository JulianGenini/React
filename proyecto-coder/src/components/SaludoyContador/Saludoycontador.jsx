import ItemCount from '../ItemCount/ItemCount'
import './Saludoycontador.css'

const Saludoycontador = ({ saludo }) => {
    const onAdd = (cant) => 
    console.log(`Cantidad: ${cant}`)


  return (
    <div><div className='saludo'> {saludo}
    <ItemCount initial={1} stock={10} onAdd={onAdd}/>
  </div></div>
  )
}

export default Saludoycontador