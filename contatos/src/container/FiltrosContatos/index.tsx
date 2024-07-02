import { useDispatch } from 'react-redux'

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
        <FiltroCard valor={enums.Filiacao.Trabalho} Deescricao='Trabalho' Font='../../imgs/IconsFiltro/iconTrabalho.png' onClick={() => dispatch(SetTipo(valor))}/>
        <FiltroCard valor={enums.Filiacao.Comercial} Deescricao='Comercial' Font='../../imgs/IconsFiltro/iconWorker.png' onClick={() => dispatch(SetTipo(valor))}/>
        <FiltroCard valor={enums.Filiacao.Familiar} Deescricao='Familia' Font='../../imgs/IconsFiltro/iconfamilia.png' onClick={() => dispatch(SetTipo(valor))}/>
        <FiltroCard valor={enums.Filiacao.Amigos} Deescricao='Amigos' Font='../../imgs/IconsFiltro/iconAmigos.png' onClick={() => dispatch(SetTipo(valor))}/>
        <FiltroCard valor={'Todos'} Deescricao='Todos' Font='../../imgs/IconsFiltro/conTodos.png' onClick={() => dispatch(SetTipo(valor))}/>
        <FiltroCard valor={'Todos'} Deescricao='Adicionar' Font='../../imgs/IconsFiltro' onClick={() => dispatch(SetTipo(valor))}/>
      </Formulario>
    </Container>
  )
}

export default FiltrosContatos
