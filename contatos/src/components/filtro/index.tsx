import { useSelector } from 'react-redux'
import { RootReducer } from '../../Store'

import * as S from './styles'
import * as enums from '../../utis/enums/index'

type Props = {
  Descricao: string
  valor?: 'todos' | enums.Filiacao
  Font: string
}

const FiltroCard = ({ Descricao, Font, valor }: Props) => {
  const { tipo } = useSelector((state: RootReducer) => state.Filtro)
  return (
    <S.FitroItem ativo={tipo === valor}>
      <S.Icon src={Font} />
      <S.Descricao> {Descricao} </S.Descricao>
    </S.FitroItem>
  )
}

export default FiltroCard
