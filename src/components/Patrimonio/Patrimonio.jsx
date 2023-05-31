import './Patrimonio.css'
import { FaTrash } from 'react-icons/fa'

function Patrimonio(props) {
    function deletar() {
        props.deletarPatrimonio(props.id)
    }
    return (
        <div className='patrimonio'>
            <p>{props.nome}</p>
            <p>R$ {props.valor}</p>
            <p>{props.responsavel}</p>
            <img className='p-img' src={props.img} alt="Foto do patrimônio." />
            <button className='icon-button' onClick={deletar}><FaTrash /></button>
        </div>
    )
}

export default Patrimonio