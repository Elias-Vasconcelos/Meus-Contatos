import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import {
  BtnCadastrar,
  ContainerB,
  ContainerFormulario,
  ConteinetSeletores,
  Formulario
} from './styles'
import { Seletor, Titulo } from '../../styles'
import * as enums from '../../utis/enums/index'
import { Cadastrar } from '../../Store/reducers/Contatos'

const CadastraTarefas = () => {
  const dispatch = useDispatch()

  const [userName, setuserName] = useState('')
  const [userEmail, setuserEmail] = useState('')
  const [userNumber, setuserNumber] = useState(0)
  const [userFiliacao, setuserFiliacao] = useState(enums.Filiacao.Amigos)
  const [userGenero, setuserGenero] = useState(enums.Genero.Femenino)
  dispatch(
    Cadastrar({
      Nome: userName,
      Email: userEmail,
      Numero: userNumber,
      Filiacao: userFiliacao,
      Genero: userGenero
    })
  )

  return (
    <ContainerB>
      <Formulario>
        <Titulo style={{ width: 900, marginBottom: 32 }}>Novo contato</Titulo>
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
      <BtnCadastrar>Adicionar Contato +</BtnCadastrar>
    </ContainerB>
  )
}

export default CadastraTarefas
