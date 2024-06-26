import React from 'react'
import EstiloGlobal, { Container } from './styles'
import FiltrosContatos from './container/FiltrosContatos'
import ListaContatos from './container/ListaContatos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <FiltrosContatos />
        <ListaContatos />
      </Container>
    </>
  )
}

export default App
