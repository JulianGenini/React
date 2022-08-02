import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    // aca puedo declarar todos los estados y funciones globales

    const [cartList, setCartList] = useState([])

    const vaciarCarrito = () => {
        setCartList([])
    }

    //falta no aceptar duplicados y mantener consistencia
    const agregarCarrito = (prod, count) => {

        setCartList((prev) => {
            const isProdInCart = prev.find((cartList) => cartList.prod.id === prod.id)
            let cantidad = count
            if (isProdInCart) {
                return cartList.map((currentProd) =>
                    currentProd.prod.id === prod.id
                        ? { prod, cantidad: currentProd.cantidad + count }
                        :currentProd
                )
            }
            return [...prev, {prod, cantidad}]
        })

        /* setCartList([
            ...cartList,
            prod]) */
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider