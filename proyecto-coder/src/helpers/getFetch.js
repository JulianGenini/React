let productos = [
    { id: '1', categoria: 'entradas', nombre: 'ensalada', precio: 100, foto: 'https://placekitten.com/250/200' },
    { id: '2', categoria: 'entradas', nombre: 'papas fritas', precio: 100, foto: 'https://placekitten.com/250/200' },
    { id: '3', categoria: 'plato_principal', nombre: 'ravioles', precio: 200, foto: 'https://placekitten.com/250/200' },
    { id: '4', categoria: 'plato_principal', nombre: 'hamburguesa', precio: 200, foto: 'https://placekitten.com/250/200' },
    { id: '5', categoria: 'postre', nombre: 'flan', precio: 100, foto: 'https://placekitten.com/250/200' },
    { id: '6', categoria: 'postre', nombre: 'Ensalada de Frutas', precio: 100, foto: 'https://placekitten.com/250/200' },
    { id: '7', categoria: 'bebidas', nombre: 'agua', precio: 50, foto: 'https://placekitten.com/250/200' },
    { id: '8', categoria: 'bebidas', nombre: 'vino', precio: 50, foto: 'https://placekitten.com/250/200' }
]

export const getFetch = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                resolve(productos.find(producto => producto.id === id))
            } else {
                resolve(productos)
            }
        }, 2000)
    })
}

