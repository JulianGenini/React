let productos = [
    { id: '1', categoria: 'entradas', nombre: 'ensalada', precio: 100, foto: 'https://placekitten.com/250/200' },
    { id: '2', categoria: 'plato principal', nombre: 'ravioles', precio: 200, foto: 'https://placekitten.com/250/200' },
    { id: '3', categoria: 'postre', nombre: 'flan', precio: 100, foto: 'https://placekitten.com/250/200' },
    { id: '4', categoria: 'bebidas', nombre: 'agua', precio: 50, foto: 'https://placekitten.com/250/200' }
]

export const getFetch = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                resolve(productos.find(producto => producto.id == id))
            } else {
                resolve(productos)
            }
        }, 2000)
    })
}

