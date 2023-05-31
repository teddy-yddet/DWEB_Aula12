import './Navegacao.css'
import { NavLink } from 'react-router-dom'

function Navegacao() {
    return (
    <nav>
        <ul>
            <li>
                <NavLink to="/patrimonios">Patrimonios</NavLink>
            </li>
            <li>
                <NavLink to="/servidores">Servidores</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Navegacao