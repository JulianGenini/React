import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import CartContextProvider from './context/CartContext'


function App() {

  return (

    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route index path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            {/* todas las rutas que no esten definidas las redirecciona a la raiz*/}
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App