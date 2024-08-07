import { useSelector } from 'react-redux'

import CardContato from '../../components/card'
import { RootReducer } from '../../Store'
import { MainContainer } from '../../styles'

const ListaContatos = () => {
  const { item } = useSelector((state: RootReducer) => state.Contatos)
  const { termo, tipo } = useSelector((state: RootReducer) => state.Filtro)

  const FiltraContato = () => {
    let ContatosFiltrados = item
    if (termo) {
      ContatosFiltrados = ContatosFiltrados.filter(
        (item) => item.Nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (tipo !== 'todos') {
        ContatosFiltrados = ContatosFiltrados.filter(
          (contato) => contato.Filiacao === tipo
        )
      }

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
              Genero={c.Genero}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaContatos
