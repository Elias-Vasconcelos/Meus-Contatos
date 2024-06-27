import { configureStore } from '@reduxjs/toolkit'
import contatosSlice from './reducers/Contatos'

const store = configureStore({
  reducer: {
    Contatos: contatosSlice.reducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
