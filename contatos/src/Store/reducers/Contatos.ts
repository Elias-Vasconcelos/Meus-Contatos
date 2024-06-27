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
    setEmail: (state, action: PayloadAction<string>) => {
      state.item.Email = action.payload
    },
    setNumero: (state, action: PayloadAction<string>) => {
      state.item.Email = action.payload
    },
    setNome: (state, action: PayloadAction<string>) => {
      state.item.Nome = action.payload
    }
  }
})

export const { remover, setEmail, setNumero, setNome } = contatosSlice.actions
export default contatosSlice
