import './App.css'
import NavBar from './components/NavBar/NavBar'
import Saludo from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Saludo nombre="Julian"/>
    </div>
  )
}

export default App
