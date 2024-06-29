import styled, { createGlobalStyle } from 'styled-components'

import variaveis from './variaveis'
import * as enums from '../utis/enums/index'

type props = {
  ativo?: boolean
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
export const Titulo = styled.h2`
  width: 296px;
  height: 56px;
  color: black;
  font-size: 40px;
`
export const Seletor = styled.span<props>`
 width: 128px;
 height: 40px;
 text-align: center;
 border-radius: 16px;
 border: 1px solid ${props.ativo? variaveis.corTemaContato : whith }
 color: ${props.ativo? variaveis.corTemaContato : black }
`

export default EstiloGlobal
