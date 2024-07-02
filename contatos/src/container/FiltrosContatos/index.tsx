import { useDispatch } from 'react-redux'

import { Buscador, Container, Formulario } from './styles'
import { SetTermo, SetTipo } from '../../Store/reducers/Filtro'
import * as enums from '../../utis/enums/index'
import FiltroCard from '../../components/filtro'
import { Link } from 'react-router-dom'
import * as img from '../../imgs/IconsFiltro/add-user.png'
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
        <FiltroCard
          valor={enums.Filiacao.Trabalho}
          Descricao="Trabalho"
          Font="../../imgs/IconsFiltro/iconTrabalho.png"
          onClick={() => dispatch(SetTipo(enums.Filiacao.Trabalho))}
        />
        <FiltroCard
          valor={enums.Filiacao.Comercial}
          Descricao="Comercial"
          Font="../../imgs/IconsFiltro/iconWorker.png"
          onClick={() => dispatch(SetTipo(enums.Filiacao.Comercial))}
        />
        <FiltroCard
          valor={enums.Filiacao.Familiar}
          Descricao="Familia"
          Font="../../imgs/IconsFiltro/iconfamilia.png"
          onClick={() => dispatch(SetTipo(enums.Filiacao.Familiar))}
        />
        <FiltroCard
          valor={enums.Filiacao.Amigos}
          Descricao="Amigos"
          Font="../../imgs/IconsFiltro/iconAmigos.png"
          onClick={() => dispatch(SetTipo(enums.Filiacao.Amigos))}
        />
        <FiltroCard
          valor={'todos'}
          Descricao="Todos"
          Font="../../imgs/IconsFiltro/conTodos.png"
          onClick={() => dispatch(SetTipo('todos'))}
        />
        <FiltroCard
          Descricao="Adicionar"
          Font="../../imgs/IconsFiltro/add-user.png"
          as={Link}
          to="/Formulario"
        />
      </Formulario>
    </Container>
  )
}

export default FiltrosContatos
