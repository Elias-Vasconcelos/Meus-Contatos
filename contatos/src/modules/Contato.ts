import * as enums from '../utis/enums/index'

class Contato {
  Nome: string
  Email: string
  Numero: number
  Filiacao: enums.Filiacao
  id: number

  constructor(
    Nome: string,
    Email: string,
    Numero: number,
    Filiacao: enums.Filiacao,
    id: number
  ) {
    this.Nome = Nome
    this.Email = Email
    this.Numero = Numero
    this.Filiacao = Filiacao
    this.id = id
  }
}

export default Contato
