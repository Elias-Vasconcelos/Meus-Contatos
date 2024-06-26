import * as S from './styles'

const CardContato = () => {
  return (
    <>
      <S.Card>
        <div>
          <S.Userimg />
          <S.Descricao>Elias Ferreira</S.Descricao>
        </div>
        <S.reparticao>
          <S.Usercontact>
            <S.Descricao>Eliasferreira@asdada</S.Descricao>
            <S.Descricao>119200000389</S.Descricao>
          </S.Usercontact>
          <S.BtnContainer>
            <S.FrontBTN>Remover Tarefa</S.FrontBTN>
            <S.FrontBTN>Editar Tarefa</S.FrontBTN>
          </S.BtnContainer>
        </S.reparticao>
      </S.Card>
      <br />
      <S.Card>
        <S.Userimg />
        <S.reparticao>
          <S.Usercontact>
            <S.Userinformations />
            <S.Userinformations />
            <S.Userinformations />
          </S.Usercontact>
          <S.BtnContainer>
            <S.backtBTN>Cancelar alteração</S.backtBTN>
            <S.backtBTN>Salvar alteração</S.backtBTN>
          </S.BtnContainer>
        </S.reparticao>
      </S.Card>
    </>
  )
}

export default CardContato
