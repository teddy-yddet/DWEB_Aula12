import Servidor from './Servidor'
import ServidorForm from './ServidorForm'
import './ServidorLista.css'
import { useEffect, useState } from 'react'
import api from '../../services/patrimonio.api'

function ServidorLista(props) {
  const [servidores, setServidores] = useState([])
  const [servidorAEditar, setServidorAEditar] = useState({})

  function salvarServidorHandler(novaPessoa) {
    if (!novaPessoa.id) {
      api.postServidor(novaPessoa).then(function(pessoaSalva) {
        setServidores(function (anteriores) {
          return [pessoaSalva, ...anteriores]
        })
      })
    } else {
      api.putServidor(novaPessoa.id, novaPessoa).then(function(pessoaSalva) {
        setServidores(function (anteriores) {
          const indice = anteriores.findIndex((p => p.id === novaPessoa.id))
          anteriores[indice].nome = novaPessoa.nome
          anteriores[indice].idade = novaPessoa.idade
          return [...anteriores]
        })
      })
    }
  }

  function editarServidor(servidor) {
    setServidorAEditar(servidor)
  }

  function recuperar() {
    api.getServidores().then(function (pessoas) {
      setServidores(pessoas)
    })
  }

  useEffect(() => {
    recuperar()
  }, [])

return (
  <div className="p-basico">
    <h1>Servidores Responsáveis</h1>
    <ServidorForm servidorAEditar={servidorAEditar} salvarServidor={salvarServidorHandler} />
    {servidores.map((servidor) => (
      <Servidor 
        key={servidor.id}
        id={servidor.id}
        nome={servidor.nome} 
        idade={servidor.idade}
        editarServidor={editarServidor} />
    ))}
  </div>
)

}

export default ServidorLista