import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utis/enums/index'
import Contato from '../../modules/Contato'

type ContatoState = {
  item: Contato[]
}

const initialState: ContatoState = {
  item: [
    {
      Nome: 'Elias',
      Email: 'EliasFerreira@gmail.com',
      Numero: 11920000389,
      Filiacao: enums.Filiacao.Amigos,
      Genero: enums.Genero.Masculino,
      id: 1
    },
    {
      Nome: 'Ivaneide',
      Email: 'Ivaneide@gmail.com',
      Numero: 1199999999,
      Filiacao: enums.Filiacao.Familiar,
      Genero: enums.Genero.Femenino,
      id: 2
    },
    {
      Nome: 'Ana',
      Email: 'Ana@gmail.com',
      Numero: 11988888888,
      Filiacao: enums.Filiacao.Familiar,
      Genero: enums.Genero.Femenino,
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'Contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.item = [
        ...state.item.filter((contato) => contato.id !== action.payload)
      ]
    },
    setContato: (
      state,
      action: PayloadAction<{
        id: number
        nome: string
        email: string
        numero: number
      }>
    ) => {
      const ContatoAlterado = state.item.find(
        (contato) => contato.id === action.payload.id
      )
      if (ContatoAlterado) {
        if (action.payload.nome.length > 5) {
          ContatoAlterado.Nome = action.payload.nome
        } else {
          alert('O nome Digitado Não é valido')
        }
        if (action.payload.email.length > 6) {
          ContatoAlterado.Email = action.payload.email
        } else {
          alert('O email Digitado Não é valido')
        }
        if (action.payload.numero > 911111111) {
          ContatoAlterado.Numero = action.payload.numero
        } else {
          alert('O numero Digitado Não é valido')
        }
      }
    },
    Cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ContatoJaExite = state.item.find(
        (Contato) => Contato.Numero === action.payload.Numero
      )
      if (ContatoJaExite) {
        alert('Este numero ja esta cadastrado')
      } else {
        const UltimoContato = state.item[state.item.length - 1]
        const NovoContato = {
          ...action.payload,
          id: UltimoContato ? UltimoContato.id + 1 : 1
        }
        state.item.push(NovoContato)
      }
    }
  }
})

export const { remover, Cadastrar, setContato } = contatosSlice.actions
export default contatosSlice
