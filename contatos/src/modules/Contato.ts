import * as enums from '../utis/enums/index'

class Contato {
  Nome: string
  Email: string
  Numero: number
  Filiacao: enums.Filiacao
  id: number
  Genero: enums.Genero

  constructor(
    Nome: string,
    Email: string,
    Numero: number,
    Filiacao: enums.Filiacao,
    id: number,
    Genero: enums.Genero
  ) {
    this.Nome = Nome
    this.Email = Email
    this.Numero = Numero
    this.Filiacao = Filiacao
    this.id = id
    this.Genero = Genero
  }
}

export default Contato
