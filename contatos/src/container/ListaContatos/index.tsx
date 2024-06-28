import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import CardContato from '../../components/card'
import { RootReducer } from '../../Store'
import { MainContainer } from '../../styles'

const ListaContatos = () => {
  const { item } = useSelector((state: RootReducer) => state.Contatos)
  const { termo } = useSelector((state: RootReducer) => state.Filtro)
  const dispatch = useDispatch()

  const FiltraContato = () => {
    const ContatosFiltrados = item
    if(termo){
      ContatosFiltrados = ContatosFiltrados.filter(
        (item) => item.Nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      return ContatosFiltrados
    } else {
      return item
    }
  }

  const Contatos = FiltraContato()

  return (
    <MainContainer>
      <ul>
        {Contatos.map((c) => (
          <li key={c.id}>
            <CardContato
              Email={c.Email}
              Filiacao={c.Filiacao}
              Nome={c.Nome}
              Numero={c.Numero}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaContatos
