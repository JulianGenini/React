let productos = [
    { id: '1', categoria: 'entradas', nombre: 'ensalada', precio: 100, foto: 'https://placekitten.com/250/200' },
    { id: '2', categoria: 'plato principal', nombre: 'ravioles', precio: 200, foto: 'https://placekitten.com/250/200' },
    { id: '3', categoria: 'postre', nombre: 'flan', precio: 100, foto: 'https://placekitten.com/250/200' },
    { id: '4', categoria: 'bebidas', nombre: 'agua', precio: 50, foto: 'https://placekitten.com/250/200' }
]

export const getFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}






















/* export const getFetch = (id) => {
    if (id) {
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve(productos.find(producto => producto.id === id))
            }, 3000)
        })
    } else 
} */