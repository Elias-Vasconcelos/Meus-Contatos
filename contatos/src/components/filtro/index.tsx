import * as S from './styles'

type Props = {
  Deescricao: string
  Font: string
}

const FiltroCard = ( { Deescricao, Font }: Props) => {
  return (
    <S.FitroItem>
      <S.Icon src={Font} />
      <S.Descricao> {Deescricao} </S.Descricao>
    </S.FitroItem>
  )
}

export default FiltroCard
