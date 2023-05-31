import { Route, Routes } from 'react-router-dom'

import PatrimonioLista from '../components/Patrimonio/PatrimonioLista'
import ServidorLista from '../components/Servidor/ServidorLista'

function Rotas () {
   return (
     <Routes>
       <Route element={<PatrimonioLista />} path="/" />
       <Route element={<PatrimonioLista />} path="/patrimonios" />
       <Route element={<ServidorLista />} path="/servidores" />
     </Routes>
   )
}

export default Rotas