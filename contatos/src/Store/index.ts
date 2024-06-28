import { configureStore } from '@reduxjs/toolkit'
import contatosSlice from './reducers/Contatos'
import FiltroSlice from './reducers/Filtro'

const store = configureStore({
  reducer: {
    Contatos: contatosSlice.reducer,
    Filtro: FiltroSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
