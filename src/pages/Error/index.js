import './error.css';
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <div className='container-error'>
            <img src="error.png" alt='Pagina nao encontrada' width="400"  />
            <h1>Página não encontrada!</h1>
            <Link to="/">
                Voltar para home
            </Link>
        </div>
    )
}