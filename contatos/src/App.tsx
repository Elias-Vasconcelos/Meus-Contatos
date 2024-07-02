import React from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import store from './Store'
import CadastraTarefas from './container/CadastraContato'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Formulario',
    element: <Home />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
      </Container>
    </Provider>
  )
}

export default App
