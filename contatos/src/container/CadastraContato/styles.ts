import styled from 'styled-components'

export const ContainerB = styled.div`
  margin: 2vh auto;
  max-width: 1080px;
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Formulario = styled.form`
  max-width: 962px;
  width: 100%;
  height: 328px;

  label {
    font-size: 18px;
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
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  column-gap: 12px;
`
