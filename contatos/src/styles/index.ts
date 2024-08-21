import styled, { createGlobalStyle } from 'styled-components'

import variaveis from './variaveis'

type props = {
  ativo: boolean
}

const EstiloGlobal = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
  body{
  background-color: ${variaveis.corFundobody} ;
  }
`
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  width: 100%;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 70vh;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
`
export const Titulo = styled.h2`
  width: 296px;
  height: 56px;
  color: black;
  font-size: 32px;
  text-wrap: nowrap;
  text-align: center;
`
export const Seletor = styled.span<props>`
  width: 128px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid
    ${(props) => (props.ativo ? variaveis.corTemaContato : 'white')};
  color: ${(props) => (props.ativo ? variaveis.corTemaContato : 'black')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export default EstiloGlobal
