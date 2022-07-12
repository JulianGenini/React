import './ItemListContainer.css'

function Saludo(props) {
    const nombre = props.nombre;
    return (
        <h1 className='saludo'>Hola {nombre}</h1>
    );
}

export default Saludo