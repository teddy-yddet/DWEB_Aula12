import './Servidor.css'
import { FaTrash, FaEdit } from 'react-icons/fa'

function Servidor(props) {
    function editar() {
        const servidor = []
        servidor.id = props.id
        servidor.nome = props.nome
        servidor.idade = props.idade
        props.editarServidor(servidor)
    }
    return (
        <div className='servidor'>
            <p>{props.nome}</p>
            <p>, idade {props.idade}</p>
            <button className='icon-button' onClick={editar}><FaEdit /></button>
        </div>
    )
}

export default Servidor