import React from 'react'
import './ItemCount.css'

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
    const [count, setCount] = React.useState(1)

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const handleRemove = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleAddToCart = () => {
        onAdd(count)
    }

    return (
        <div>
            <label>{count}</label>
            <br />
            <button className='boton' onClick={handleAdd}>+</button>
            <button className='boton' onClick={handleRemove}>-</button>
            <br />
            <button className='boton' onClick={handleAddToCart}>Agregar</button>
        </div>
    )
}

export default ItemCount