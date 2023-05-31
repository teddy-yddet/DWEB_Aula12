import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navegacao from './components/Navegacao/Navegacao'
import Rotas from './services/routes'

function App() {
  return (
    <Router>
      <div className="App">
        <Navegacao />
        <Rotas />
      </div>
    </Router>
  )
}

export default App
