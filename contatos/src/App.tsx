import React from 'react'
import { Provider } from 'react-redux'

import EstiloGlobal, { Container } from './styles'
import FiltrosContatos from './container/FiltrosContatos'
import ListaContatos from './container/ListaContatos'
import store from './Store'
import CadastraTarefas from './container/CadastraContato'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <FiltrosContatos />
        <ListaContatos />
        <CadastraTarefas />
      </Container>
    </Provider>
  )
}

export default App
