import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ({ saludo }) => {
    const onAdd = (cant) => 
    console.log(`Cantidad: ${cant}`)

  return (
    <div className='saludo'> {saludo}
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </div>

  )
}

export default ItemListContainer
