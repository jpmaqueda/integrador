import { Products } from "./view/Products"
import { Panel } from "./components/Panel/Panel"
import './App.css'
import './assets/css/style.css'
function App() {
  return (
    <div className="pagina">
      <Panel></Panel>
      <Products></Products>
    </div>    
  )
}

export default App
