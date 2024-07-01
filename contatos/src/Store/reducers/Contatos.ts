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
      id: 1
    },
    {
      Nome: 'Ivaneide',
      Email: 'iVASCONCELOS@gmail.com',
      Numero: 119209999999,
      Filiacao: enums.Filiacao.Familiar,
      id: 2
    },
    {
      Nome: 'Ana',
      Email: 'Ana@gmail.com',
      Numero: 119209999999,
      Filiacao: enums.Filiacao.Familiar,
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
    setEmail: (state, action: PayloadAction<{ id: number; email: string }>) => {
      const email = state.item.find(
        (contato) => contato.id === action.payload.id
      )
      if (email) {
        email.Email.length < 4
          ? (email.Email = action.payload.email)
          : alert('Verifique o e mail digitado')
      }
    },
    setNumero: (
      state,
      action: PayloadAction<{ id: number; numero: number }>
    ) => {
      const numero = state.item.find(
        (contato) => contato.id === action.payload.id
      )
      if (numero) {
        numero.Numero = action.payload.numero
      }
    },
    setNome: (state, action: PayloadAction<{ id: number; nome: string }>) => {
      const nome = state.item.find(
        (contato) => contato.id === action.payload.id
      )
      if (nome) {
        nome.Nome = action.payload.nome
      }
    },
    Cadastrar: (state, action: PayloadAction<Contato>) => {
      const ContatoJaExite = state.item.find((Contato) => Contato.Numero = action.payload.Numero)
      if (ContatoJaExite){
        alert('Este numero ja esta cadastrado')
      } else {
        state.item.push(action.payload)
      }
    }
  }
})

export const { remover, setEmail, setNumero, setNome, Cadastrar } = contatosSlice.actions
export default contatosSlice
