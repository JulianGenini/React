import './App.css'
import ItemList from './components/ItemList/ItemList'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo={'Hola Julian'}/>
      <ItemList />
      
    </div>
  )
}

export default App