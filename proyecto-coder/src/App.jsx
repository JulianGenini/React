import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { CartContext } from './context/CartContext'

function App() {

  return (

    <BrowserRouter>
      <CartContext.Provider value={{}}>
        <div className="App">
          <NavBar />

          <Routes>
            <Route index path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />


            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            {/* <Route path='/cart' element={<Cart />} /> */}


            {/* todas las rutas que no esten definidas las redirecciona a la raiz*/}
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>

        </div>
      </CartContext.Provider>
    </BrowserRouter>
  )
}

export default App