import { useDispatch } from 'react-redux'

import FiltroCard from '../../components/filtro'
import { Buscador, Container, Formulario } from './styles'
import { SetTermo } from '../../Store/reducers/Filtro'

const FiltrosContatos = () => {
  const dispatch = useDispatch()
  return (
    <Container>
      <Buscador
        type="text"
        placeholder="Posso ajudar?"
        onChange={(evento) => dispatch(SetTermo(evento.target.value))}
      />
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
