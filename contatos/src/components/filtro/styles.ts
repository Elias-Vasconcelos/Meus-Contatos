import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type props = {
  ativo: boolean
}

export const FitroItem = styled.li<props>`
  max-width: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${variaveis.corDeFundoCard};
  border-radius: 16px;
  border: 1px solid
    ${(props) =>
      props.ativo ? variaveis.corTemaContato : variaveis.corDeFundoCard};
  color: ${(props) => (props.ativo ? variaveis.corTemaContato : 'black')};
`
export const Icon = styled.img`
  max-width: 64px;
  width: 100%;
  height: 64px;
  border-radius: 16px;
  margin: 6px 0;
`
export const Descricao = styled.h3`
  font-size: 16px;
  margin-bottom: 6px;
`
