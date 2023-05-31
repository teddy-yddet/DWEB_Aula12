import './ServidorForm.css'
import { useState, useEffect } from 'react'

function ServidorForm(props) {
    const [id, setId] = useState(0)
    const [nomeDigitado, setNomeDigitado] = useState('')
    const [idadeDigitado, setIdadeDigitado] = useState(18)

    function nomeHandler(event) {
        setNomeDigitado(event.target.value)
    }

    function idadeHandler(event) {
        setIdadeDigitado(parseInt(event.target.value))
    }

    function submitHandler(event) {
        event.preventDefault()
        const pessoa = {
            nome: nomeDigitado,
            idade: idadeDigitado
        }
        if (id !== 0) {
            pessoa.id = id
        }
        props.salvarServidor(pessoa)
        setNomeDigitado('')
        setIdadeDigitado(18)
        setId(0)
    }

    useEffect(() => {
        if (props.servidorAEditar.id) {
            console.log(props.servidorAEditar)
            setId(props.servidorAEditar.id)
            setNomeDigitado(props.servidorAEditar.nome)
            setIdadeDigitado(props.servidorAEditar.idade)
        }
    }, [props.servidorAEditar])

    return (
        <div className='s-form'>
            <form onSubmit={submitHandler}>
                <div><label>Nome: </label> 
                <input type='text' className='new-line' onChange={nomeHandler} value={nomeDigitado}/></div>
                <div><label>Idade: </label> 
                <input type='number' min='18' max='99' onChange={idadeHandler} value={idadeDigitado}/></div>
                <button type='submit'>Salvar</button>    
            </form>
        </div>
    )
}

export default ServidorForm