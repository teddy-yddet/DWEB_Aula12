import './PatrimonioForm.css'
import { useEffect, useState } from 'react'
import api from '../../services/patrimonio.api'

function PatrimonioForm(props) {
    const [nomeDigitado, setNomeDigitado] = useState('')
    const [valorDigitado, setValorDigitado] = useState(0)
    const [responsavelSelecionado, setResponsavelSelecionado] = useState(1)
    const [imgDigitado, setImgDigitado] = useState('')
    const [responsaveis, setResponsaveis] = useState([])

    function recuperar() {
        api.getServidores().then(function (pessoas) {
          setResponsaveis(pessoas)
        })
    }
    
    useEffect(() => {
        recuperar()
    }, [])

    function nomeHandler(event) {
        setNomeDigitado(event.target.value)
    }

    function valorHaldler(event) {
        setValorDigitado(parseFloat(event.target.value))
    }

    function responsavelHaldler(event) {
        setResponsavelSelecionado(event.target.value)
    }

    function imgHandler(event) {
        setImgDigitado(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault() 
        const dados = {
            nome: nomeDigitado,
            valor: valorDigitado,
            responsavelId: responsavelSelecionado,
            foto: imgDigitado
        }
        props.salvarPatrimonio(dados)
        setNomeDigitado('')
        setValorDigitado(0)
        setResponsavelSelecionado(1)
        setImgDigitado('')
    }

    return (
        <div className='p-form'>
            <form onSubmit={submitHandler}>
                <div><label>Nome: </label> 
                <input type='text' className='new-line' onChange={nomeHandler} value={nomeDigitado}/></div>
                <div><label>Valor: </label> 
                <input type='number' onChange={valorHaldler} value={valorDigitado}/></div>
                <div><label>Responsável: </label> 
                <select onChange={responsavelHaldler}>
                    {responsaveis.map((responsavel) => (
                        <option key={responsavel.id} value={responsavel.id}>{responsavel.nome}</option>
                    ))}
                </select></div>
                <div><label>Imagem: </label> 
                <input type='text' onChange={imgHandler} value={imgDigitado}/></div>
                <button type='submit'>Adicionar</button>    
            </form>
        </div>
    )
}

export default PatrimonioForm