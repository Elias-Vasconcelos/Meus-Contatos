import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 232px;
  width: 100%;
`
export const Formulario = styled.form`
  display: grid;
  grid-template-columns: repeat(6, 102px);
  column-gap: 16px;
`
export const Buscador = styled.input`
  width: 100%;
  height: 50px;
  background-color: ${variaveis.corBarraDePesquisa};
  border: none;
  border-radius: 16px;
  text-align: center;
  font-size: 32px;
  color: white;
`
