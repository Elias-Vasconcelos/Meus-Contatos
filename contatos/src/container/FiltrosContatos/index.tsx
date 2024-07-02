import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { Buscador, Container, Formulario } from './styles'
import { SetTermo, SetTipo } from '../../Store/reducers/Filtro'
import * as enums from '../../utis/enums/index'
import FiltroCard from '../../components/filtro'
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
        <FiltroCard valor={enums.Filiacao.Trabalho} descricao='Trabalho' font='../../imgs/IconsFiltro/iconTrabalho.png' onClick={() => dispatch(SetTipo(enums.Filiacao.Trabalho))}/>
        <FiltroCard valor={enums.Filiacao.Comercial} descricao='Comercial' font='../../imgs/IconsFiltro/iconWorker.png' onClick={() => dispatch(SetTipo(enums.Filiacao.Comercial))}/>
        <FiltroCard valor={enums.Filiacao.Familiar} descricao='Familia' font='../../imgs/IconsFiltro/iconfamilia.png' onClick={() => dispatch(SetTipo(enums.Filiacao.Familiar))}/>
        <FiltroCard valor={enums.Filiacao.Amigos} descricao='Amigos' font='../../imgs/IconsFiltro/iconAmigos.png' onClick={() => dispatch(SetTipo(enums.Filiacao.Amigos))}/>
        <FiltroCard valor={'Todos'} descricao='Todos' font='../../imgs/IconsFiltro/conTodos.png' onClick={() => dispatch(SetTipo('Todos'))}/>
        <FiltroCard as={Link} descricao='Adicionar' font='../../imgs/IconsFiltro' to='/Formulario' />
      </Formulario>
    </Container>
  )
}

export default FiltrosContatos
