import './App.css'
import Navbar from "./componentes/navbar/navbar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"



const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos a la tienda Marolio"} />
      
    </>
  )
}

export default App

