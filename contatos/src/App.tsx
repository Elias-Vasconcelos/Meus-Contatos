import React from 'react'
import EstiloGlobal, { Container } from './styles'
import FiltrosContatos from './container/FiltrosContatos'
import ListaContatos from './container/ListaContatos'
import { Provider } from 'react-redux'
import store from './Store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <FiltrosContatos />
        <ListaContatos />
      </Container>
    </Provider>
  )
}

export default App
