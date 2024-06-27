import { useSelector } from 'react-redux'

import CardContato from '../../components/card'
import { RootReducer } from '../../Store'
import { MainContainer } from '../../styles'

const ListaContatos = () => {
  const { item } = useSelector((state: RootReducer) => state.Contatos )
  return (
    <MainContainer>
    <ul>
      {item.map((c) => (
      <li key={c.id} >
        <CardContato 
         Email={c.Email}
         Filiacao={c.Filiacao}
         Nome={c.Nome}
         Numero={c.Nome}
           />
      </li>
    ))}
    </ul>
    </MainContainer>
  )
}

export default ListaContatos
