import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Titulo } from '../../styles'

export const ContainerB = styled.div`
  margin: 0 auto;
  max-width: 680px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 80vh;
`
export const Formulario = styled.form`
  width: 100%;
  height: 328px;
  text-align: center;

  ${Titulo} {
    width: 100%;
    text-align: center;
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e0e0e0;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 16px;
  padding: 32px;
`

export const ContainerFormulario = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  label {
    font-size: 18px;
    width: 100px;
  }

  input {
    width: 336px;
    height: 50px;
    border: none;
    border-radius: 16px;
    text-align: center;
    font-size: 18px;
  }
`

export const ConteinetSeletores = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10px, 128px));
  column-gap: 12px;
  padding-bottom: 32px;
`
export const BtnCadastrar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 180px;
  height: 48px;
  font: 16px;
  color: white;
  background-color: ${variaveis.corTemaContato};
  font-size: 18px;
  border-radius: 16px;
  border: none;
`
