import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: white;
  border: 1px solid ${variaveis.corTemaContato};
  border-radius: 16px;
  color: ${variaveis.corTemaContato};
  display: grid;
  grid-template-columns: 200px auto;
  width: 624px;
  height: 216px;
  justify-content: center;
`
export const Userimg = styled.img`
  margin-top: 15px;
  width: 104px;
  height: 104px;
  border-radius: 16px;
`

export const reparticao = styled.div`
  display: grid;
  grid-template-rows: 1fr 40px;
`

export const Usercontact = styled.div`
  width: 344px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Descricao = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`
export const Userinformations = styled.input`
  width: 100%;
  background-color: white;
  border-radius: 16px;
  border: 2px solid ${variaveis.corTemaContato};
  margin-bottom: 5px;
  height: 20px;
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
`

export const FrontBTN = styled.div`
  width: 160px;
  height: 24px;
  font: 16px;
  color: ${variaveis.corTemaContato};
  background-color: white;
  border-radius: 16px;
  border: 1px solid ${variaveis.corTemaContato};
  text-align: center;
  margin-left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const backtBTN = styled.div`
  width: 160px;
  height: 24px;
  font: 16px;
  color: white;
  background-color: ${variaveis.corTemaContato};
  border-radius: 16px;
  text-align: center;
  margin-left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`
