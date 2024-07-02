import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/filtro'
import Formulario from '../../container/CadastraContato/index'



const Formulario = () => {
    const navigate = useNavigate()
    
    const Prevent = (evento: FormEvent) => {
        evento.preventDefault()
        navigate('/')
    }
    <>
    <div style={{ width: 1080, height: 30, display: 'flex', justifyContent: 'center' }} >
        <FiltroCard Font=''  onClick={Prevent} Deescricao='<-- Voltar'/>
    </div>
    <CadastraContato />
    </>
}

export default Formulario