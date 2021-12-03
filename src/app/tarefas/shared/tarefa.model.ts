export class Tarefa {
  constructor(
    public id? : number,
    public nome? : string,
    public concluida? : boolean
  ) {}
// construtor padrão onde coloco uma definição.
// id/nome/concluida são atributos dentro da minha class
// ? serve para dizer que são opcionais/dar um pouco de flexibilidade no codigo
}
