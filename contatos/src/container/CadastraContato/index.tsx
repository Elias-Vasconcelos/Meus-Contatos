import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Iconback from '../../imgs/IconsFiltro/back.png'
import {
  BtnCadastrar,
  ContainerB,
  ContainerFormulario,
  ConteinetSeletores,
  Content,
  Formulario
} from './styles'
import { Seletor, Titulo } from '../../styles'
import * as enums from '../../utis/enums/index'
import { Cadastrar } from '../../Store/reducers/Contatos'
import FiltroCard from '../../components/filtro'

const CadastraContato = () => {
  const dispatch = useDispatch()

  const [userName, setuserName] = useState('')
  const [userEmail, setuserEmail] = useState('')
  const [userNumber, setuserNumber] = useState(0)
  const [userFiliacao, setuserFiliacao] = useState(enums.Filiacao.Amigos)
  const [userGenero, setuserGenero] = useState(enums.Genero.Femenino)
  const navigate = useNavigate()

  const cadastrarcontato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      Cadastrar({
        Nome: userName,
        Email: userEmail,
        Numero: userNumber,
        Filiacao: userFiliacao,
        Genero: userGenero
      })
    )
    navigate('/')
  }
  const Prevent = (evento: FormEvent) => {
    evento.preventDefault()
    navigate('/')
  }

  return (
    <ContainerB>
      <Content>
        <FiltroCard Font={Iconback} Descricao="Home" onClick={Prevent} />
        <Formulario>
          <Titulo style={{ margin: 32 }}>Novo contato</Titulo>
          <ContainerFormulario>
            <label htmlFor="nome"> Nome Completo: </label>
            <input
              id="nome"
              type="text"
              onChange={(evento) => setuserName(evento.target.value)}
            />
          </ContainerFormulario>
          <ContainerFormulario>
            <label htmlFor="E-mail"> E-mail: </label>
            <input
              id="E-mail"
              type="text"
              onChange={(evento) => setuserEmail(evento.target.value)}
            />
          </ContainerFormulario>
          <ContainerFormulario>
            <label htmlFor="Telefone"> Telefone: </label>
            <input
              id="Telefone"
              type="number"
              onChange={(evento) =>
                setuserNumber(parseFloat(evento.target.value))
              }
            />
          </ContainerFormulario>
        </Formulario>
        <Formulario>
          <Titulo>Tipo de contato:</Titulo>
          <ConteinetSeletores>
            <Seletor
              ativo={userFiliacao === enums.Filiacao.Trabalho}
              onClick={() => setuserFiliacao(enums.Filiacao.Trabalho)}
            >
              Trabalho
            </Seletor>
            <Seletor
              ativo={userFiliacao === enums.Filiacao.Comercial}
              onClick={() => setuserFiliacao(enums.Filiacao.Comercial)}
            >
              Comercial
            </Seletor>
            <Seletor
              ativo={userFiliacao === enums.Filiacao.Familiar}
              onClick={() => setuserFiliacao(enums.Filiacao.Familiar)}
            >
              Familiar
            </Seletor>
            <Seletor
              ativo={userFiliacao === enums.Filiacao.Amigos}
              onClick={() => setuserFiliacao(enums.Filiacao.Amigos)}
            >
              Amigos
            </Seletor>
          </ConteinetSeletores>
          <Titulo>Genero:</Titulo>
          <ConteinetSeletores>
            <Seletor
              onClick={() => setuserGenero(enums.Genero.Masculino)}
              ativo={userGenero === enums.Genero.Masculino}
            >
              Masculino
            </Seletor>
            <Seletor
              onClick={() => setuserGenero(enums.Genero.Femenino)}
              ativo={userGenero === enums.Genero.Femenino}
            >
              Femenino
            </Seletor>
          </ConteinetSeletores>
        </Formulario>
        <BtnCadastrar onClick={cadastrarcontato}>
          Adicionar Contato +
        </BtnCadastrar>
      </Content>
    </ContainerB>
  )
}

export default CadastraContato
