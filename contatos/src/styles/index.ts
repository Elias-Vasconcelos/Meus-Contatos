import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

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
    height: 80vh;
  }
`
export const Container = styled.div`
  margin: 2vh auto;
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
export default EstiloGlobal
