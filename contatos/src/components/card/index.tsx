import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { setContato, remover } from '../../Store/reducers/Contatos'
import Contato from '../../modules/Contato'
import * as S from './styles'
import * as enums from '../../utis/enums/index'

import MenIcon from '../../imgs/IconsUser/UserMen.png'
import WomanIcon from '../../imgs/IconsUser/UserWoman.png'

type Props = Contato

const CardContato = ({ Nome, Email, Numero, Filiacao, id, Genero }: Props) => {
  const dispatch = useDispatch()
  const [varName, setvarName] = useState('')
  const [varEmail, setvarEmail] = useState('')
  const [varNumero, setvarNumero] = useState(0)
  const [EstaVirado, setEstaVirado] = useState(false)

  useEffect(() => {
    if (Nome.length > 0) {
      setvarName(Nome), setvarEmail(Email), setvarNumero(Numero)
    }
  }, [Nome, Email, Numero])

  const CancelaAlteraçao = () => {
    setvarName(Nome)
    setvarEmail(Email)
    setvarNumero(Numero)
  }

  const toggleEstaVirado = () => {
    setEstaVirado(!EstaVirado)
  }

  return (
    <S.Caixa>
      <S.CardContaoner className={EstaVirado ? 'flip' : ''}>
        <S.Card className="Front">
          <div>
            <S.Userimg
              src={Genero === enums.Genero.Masculino ? MenIcon : WomanIcon}
            />
            <S.Descricao style={{ width: 100 }}> {Nome} </S.Descricao>
            <S.Descricao style={{ width: 100 }}>{Filiacao}</S.Descricao>
          </div>
          <S.reparticao>
            <S.Usercontact>
              <S.Descricao> {Email} </S.Descricao>
              <S.Descricao>{Numero}</S.Descricao>
            </S.Usercontact>
            <S.BtnContainer>
              <S.FrontBTN onClick={() => dispatch(remover(id))}>
                Remover Tarefa
              </S.FrontBTN>
              <S.FrontBTN onClick={toggleEstaVirado}>Editar Tarefa</S.FrontBTN>
            </S.BtnContainer>
          </S.reparticao>
        </S.Card>
        <br />
        <S.Card className="Back">
          <S.Userimg
            src={Genero === enums.Genero.Masculino ? MenIcon : WomanIcon}
          />
          <S.reparticao>
            <S.Usercontact>
              <S.Userinformations
                onBlur={(event) => setvarName(event.target.value)}
                type="text"
                placeholder="Nome Completo"
              />
              <S.Userinformations
                onBlur={(event) => setvarEmail(event.target.value)}
                placeholder="Email"
              />
              <S.Userinformations
                onBlur={(event) => setvarNumero(parseFloat(event.target.value))}
                type="number"
                placeholder="Numero de telefone"
              />
            </S.Usercontact>
            <S.BtnContainer>
              <S.backtBTN
                onClick={() => {
                  CancelaAlteraçao()
                  toggleEstaVirado()
                }}
              >
                Cancelar alteracao
              </S.backtBTN>
              <S.backtBTN
                onClick={() => {
                  dispatch(
                    setContato({
                      id,
                      nome: varName,
                      email: varEmail,
                      numero: varNumero
                    })
                  )
                  toggleEstaVirado()
                }}
              >
                Salvar alteracao
              </S.backtBTN>
            </S.BtnContainer>
          </S.reparticao>
        </S.Card>
      </S.CardContaoner>
    </S.Caixa>
  )
}

export default CardContato
