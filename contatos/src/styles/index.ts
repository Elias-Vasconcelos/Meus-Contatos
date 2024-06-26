import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
}
  body{
  background-color: ${variaveis.corFundobody} ;
  }
`
export const Container = styled.div`
  margin: 2vh auto;
  max-width: 1080px;
  width: 100%;
`
export default EstiloGlobal
