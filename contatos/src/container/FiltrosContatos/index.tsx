import { useDispatch } from 'react-redux'

import { Buscador, Container, Formulario } from './styles'
import { SetTermo, SetTipo } from '../../Store/reducers/Filtro'
import * as enums from '../../utis/enums/index'
import FiltroCard from '../../components/filtro'

import Trabalho from '../../imgs/IconsFiltro/iconTrabalho.png'
import iconWorker from '../../imgs/IconsFiltro/iconWorker.png'
import iconfamilia from '../../imgs/IconsFiltro/iconfamilia.png'
import iconAmigos from '../../imgs/IconsFiltro/iconAmigos.png'
import iconTodos from '../../imgs/IconsFiltro/iconTodos.png'

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
          Descricao={'Trabalho'}
          Font={Trabalho}
          onClick={() => dispatch(SetTipo(enums.Filiacao.Trabalho))}
        />
        <FiltroCard
          valor={enums.Filiacao.Comercial}
          Descricao="Comercial"
          Font={iconWorker}
          onClick={() => dispatch(SetTipo(enums.Filiacao.Comercial))}
        />
        <FiltroCard
          valor={enums.Filiacao.Familiar}
          Descricao="Familia"
          Font={iconfamilia}
          onClick={() => dispatch(SetTipo(enums.Filiacao.Familiar))}
        />
        <FiltroCard
          valor={enums.Filiacao.Amigos}
          Descricao="Amigos"
          Font={iconAmigos}
          onClick={() => dispatch(SetTipo(enums.Filiacao.Amigos))}
        />
        <FiltroCard
          valor={'todos'}
          Descricao="Todos"
          Font={iconTodos}
          onClick={() => dispatch(SetTipo('todos'))}
        />
        {/* <FiltroCard
          Descricao="Adicionar"
          Font="../../imgs/IconsFiltro/add-user.png"
          as={Link}
          to="/Formulario"
        /> */}
      </Formulario>
    </Container>
  )
}

export default FiltrosContatos
