import { useSelector } from 'react-redux'
import { RootReducer } from '../../Store'

import * as S from './styles'

type Props = {
  Deescricao: string
  valor?: 'todos' | enums.Filiacao
  Font: string
}

const FiltroCard = ( { Deescricao, Font, valor }: Props) => {
  const { tipo } = useSelector((state: RootReducer) => state.Filtro)
  return (
    <S.FitroItem ativo={ tipo === valor } > 
      <S.Icon src={Font} />
      <S.Descricao> {Deescricao} </S.Descricao>
    </S.FitroItem>
  )
}

export default FiltroCard
