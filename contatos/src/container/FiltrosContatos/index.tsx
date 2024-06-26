import FiltroCard from '../../components/filtro'
import { Buscador, Container, Formulario } from './styles'

const FiltrosContatos = () => {
  return (
    <Container>
      <Buscador type="text" placeholder="Posso ajudar?" />
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
