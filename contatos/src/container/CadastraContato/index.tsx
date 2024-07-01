import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import { ContainerB, ConteinetSeletores, Formulario } from './styles'
import { Seletor, Titulo } from '../../styles'
import * as enums from '../../utis/enums/index'
import { Cadastrar } from '../../Store/reducers/Contatos'

const CadastraTarefas = (evento: FormEvent) => {
  evento.preventDefault()

  const dispatch = useDispatch()

  const [userName, setuserName] = useState('')
  const [userEmail, setuserEmail] = useState('')
  const [userNumber, setuserNumber] = useState(0)
  const [userFiliacao, setuserFiliacao] = useState(enums.Filiacao)
  const [userGenero, setuserGenero] = useState('Mascolino' | 'Femenino' )

  dispatch(Cadastrar({
    userName,
    userEmail,
    userNumber,
    userFiliacao,
    id: 10
  })
)

  return (
    <ContainerB>
      <Formulario>
        <Titulo>Novo contato</Titulo>
        <div style={{ width: 600, display: 'flex', justifyContent: 'center' }}>
          <label htmlFor="nome"> Nome Completo: </label>
          <input
            id="nome"
            type="text"
            onChange={(evento) => setuserName(evento.target.value)}
          />
        </div>
        <div style={{ width: 600, display: 'flex', justifyContent: 'center' }}>
          <label htmlFor="E-mail"> E-mail: </label>
          <input
            id="E-mail"
            type="text"
            onChange={(evento) => setuserEmail(evento.target.value)}
          />
        </div>
        <div style={{ width: 600, display: 'flex', justifyContent: 'center' }}>
          <label htmlFor="Telefone"> Telefone: </label>
          <input
            id="Telefone"
            type="number"
            onChange={(evento) => setuserNumber(parseFloat(evento.target.value))}
          />
        </div>
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
        <Titulo style={{ FontSize: 14 }}>Genero:</Titulo>
        <ConteinetSeletores>
          <Seletor onClick={setuserGenero( 'Mascolino' )} ativo={ userGenero === 'Mascolino'}>
            Masculino
          </Seletor>
          <Seletor onClick={setuserGenero( 'Femenino' )} ativo={ userGenero === 'Femenino' }>
            Masculino
          </Seletor>
          <Seletor>Femenino</Seletor>
        </ConteinetSeletores>
      </Formulario>
    </ContainerB>
  )
}

export default CadastraTarefas
