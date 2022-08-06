import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    // aca puedo declarar todos los estados y funciones globales

    const [cartList, setCartList] = useState([])

    const vaciarCarrito = () => {
        setCartList([])
    }

    //precio total
    const precioTotal = () => {
        return cartList.reduce((acumPrecio, prodObj) => acumPrecio = acumPrecio + (prodObj.precio * prodObj.cantidad) , 0)
    }

    //cantidad total

    const cantidadTotal = ()=> {
        return cartList.reduce( (contador, prodObjeto) => contador += prodObjeto.cantidad , 0 )
    }

    //borrar un producto del carrito

    const eliminarProducto = (id) => {
        setCartList (cartList.filter (prod => prod.id != id ))
    }

    //no aceptar duplicados y mantener consistencia
    const agregarCarrito = (prod) => {
        const idx = cartList.findIndex(producto => producto.id === prod.id)
        if (idx != -1) {
            //existe en el carrito
            let cant = cartList[idx].cantidad
            cartList[idx].cantidad = cant + prod.cantidad
            setCartList([ ...cartList ]) 

        } else {
            //no existe
            setCartList([
                ...cartList,
                prod])
        }
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider