import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import FiltroCard from '../../components/filtro'
import { Buscador, Container, Formulario } from './styles'
import { RootReducer } from '../../Store'

const FiltrosContatos = () => {
  const dispatch = useDispatch()
  return (
    <Container>
      <Buscador type="text" placeholder="Posso ajudar?" onChange={evento => dispatch(SetTermo(evento.target.value))} />
      <Formulario>
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
      </Formulario>
    </Container>
  )
}

export default FiltrosContatos
