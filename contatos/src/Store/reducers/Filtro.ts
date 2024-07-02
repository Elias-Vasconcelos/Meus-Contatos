import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utis/enums/index'

type FiltroType = {
  termo: string
  tipo: 'todos' | enums.Filiacao
}

const initialState: FiltroType = {
  termo: '',
  tipo: 'todos'
}

const FiltroSlice = createSlice({
  name: 'Filtro',
  initialState,
  reducers: {
    SetTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    SetTipo: (state, action: PayloadAction<'todos' | enums.Filiacao>) => {
      state.tipo = action.payload
    }
  }
})

export const { SetTermo, SetTipo } = FiltroSlice.actions
export default FiltroSlice.reducer
