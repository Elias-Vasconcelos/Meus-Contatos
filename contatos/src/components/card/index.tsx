import { useDispatch } from 'react-redux'

import Contato from '../../modules/Contato'
import * as S from './styles'
import { setNome, setEmail, setNumero } from '../../Store/reducers/Contatos'

type Props = Contato

const CardContato = ({ Nome, Email, Numero, Filiacao, id }: Props) => {
  const dispatch = useDispatch()
  return (
    <>
      <S.Card>
        <div>
          <S.Userimg />
          <S.Descricao style={{ width: 100 }}> {Nome} </S.Descricao>
          <S.Descricao style={{ width: 100 }}>{Filiacao}</S.Descricao>
        </div>
        <S.reparticao>
          <S.Usercontact>
            <S.Descricao> {Email} </S.Descricao>
            <S.Descricao>{Numero}</S.Descricao>
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
            <S.Userinformations
              type="text"
              placeholder="Nome Completo"
              onBlur={(evento) =>
                dispatch(setNome({ id, nome: evento.target.value }))
              }
            />
            <S.Userinformations
              placeholder="Email"
              onChange={(evento) =>
                dispatch(setEmail({ id, email: evento.target.value }))
              }
            />
            <S.Userinformations
              type="number"
              placeholder="Numero de telefone"
              onChange={(evento) =>
                dispatch(
                  setNumero({ id, numero: parseFloat(evento.target.value) })
                )
              }
            />
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
