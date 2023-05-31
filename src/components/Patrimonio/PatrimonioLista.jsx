import Patrimonio from './Patrimonio'
import PatrimonioForm from './PatrimonioForm'
import './PatrimonioLista.css'
import { useEffect, useState } from 'react'
import api from '../../services/patrimonio.api'

function PatrimonioLista(props) {
  const [patrimonios, setPatrimonios] = useState([])

  function recuperar() {
    api.getPatrimonios().then(function (itens) {
      setPatrimonios(itens)
    })
  }

  useEffect(() => {
    recuperar()
  }, [])

  function salvarPatrimonioHandler(patrimonio) {
    api.postPatrimonio(patrimonio).then(function(patrimonioSalvo) {
      patrimonioSalvo.pessoa = {}
      api.getServidorByPk(patrimonioSalvo.responsavelId).then((responsavel) => {
        patrimonioSalvo.pessoa.nome = responsavel.nome
        setPatrimonios(function (anteriores) {
          return [patrimonioSalvo, ...anteriores]
        })
      })
    })
  }

  function deletarPatrimonio(id) {
    api.deletePatrimonio(id).then(function () {
      setPatrimonios(function (anteriores) {
        anteriores = anteriores.filter(function(patri) {
          return patri.id !== id
        })
        return [...anteriores]
      })
    })
  }

  return (
    <div className="p-basico">
      <h1> Patrimônios</h1>
      <PatrimonioForm salvarPatrimonio={salvarPatrimonioHandler} />
      {patrimonios.map((patrimonio) => (
        <Patrimonio
          key={patrimonio.id}
          id={patrimonio.id}
          nome={patrimonio.nome}
          valor={patrimonio.valor}
          responsavel={patrimonio.pessoa.nome}
          img={patrimonio.foto}
          deletarPatrimonio={deletarPatrimonio}
        />
      ))}
    </div>
  )
}

export default PatrimonioLista