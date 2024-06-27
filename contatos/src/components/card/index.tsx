import Contato from '../../modules/Contato'
import * as S from './styles'

type Props = Contato
const CardContato = ({ Nome, Email, Numero, Filiacao}: Props  ) => {

  return (
    <>
      <S.Card>
        <div>
          <S.Userimg />
          <S.Descricao nome={Nome} > {Nome} </S.Descricao>
          <S.Descricao Filiacao={Filiacao}>{Filiacao}</S.Descricao>
        </div>
        <S.reparticao>
          <S.Usercontact>
            <S.Descricao Email={Email}>{Email}</S.Descricao>
            <S.Descricao Numero={Numero} >{Numero}</S.Descricao>
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
            <S.backtBTN>Cancelar alteracao</S.backtBTN>
            <S.backtBTN>Salvar alteracao</S.backtBTN>
          </S.BtnContainer>
        </S.reparticao>
      </S.Card>
    </>
  )
}

export default CardContato
