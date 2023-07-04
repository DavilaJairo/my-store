import './App.css'
import Navbar from "./componentes/navbar/navbar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"The Best Games"} />
      <ItemDetailContainer/>
      
    </>
  )
}

export default App

