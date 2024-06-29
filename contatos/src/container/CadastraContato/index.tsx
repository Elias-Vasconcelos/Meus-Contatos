import { useState, FormEvent } from 'react'

import { ContainerB, Formulario } from './styles'
import { Seletor, Titulo } from '../../styles'
import * as enums from '../../utis/enums/index'

const CadastraTarefas = (evento: FormEvent) => {
    evento.preventDefault()

    const [ userName, setuserName ] = useState('')
    const [ userEmail, setuserEmail ] = useState('')
    const [ userNumber, setuserNumber ] = useState(0)
    const [ userFiliacao, setuserFiliacao ] = useState(0)

    return (
        < ContainerB >
         <Formulario>
            <Titulo>Novo contato</Titulo>
            <div style={{ width: 600, display: 'flex', justifyContent: 'center' }}>
            <label htmlFor="nome"> Nome Completo: </label>
            <input id='nome' type="text" onchange={evento => setuserName(evento.target.value)} />
            </div>
            <div style={{ width: 600, display: 'flex', justifyContent: 'center' }} >
            <label htmlFor="E-mail"> E-mail: </label>
            <input id='E-mail' type="text" onchange={evento => setuserEmail(evento.target.value)} />
            </div>
            <div style={{ width: 600, display: 'flex', justifyContent: 'center' }} >
            <label htmlFor="Telefone"> Telefone: </label>
            <input id='Telefone' type="number" onchange={evento => setuserNumber(evento.target.value)} />
            </div>
         </Formulario>
         <Formulario>
         <Titulo>Tipo de contato:</Titulo>
          <div>
            <Seletor>Trabalho</Seletor>
            <Seletor>Comercial</Seletor>
            <Seletor>Familiar</Seletor>
            <Seletor>Amigos</Seletor>
          </div>
         </Formulario>
        </ContainerB>
    )
}

export default CadastraTarefas