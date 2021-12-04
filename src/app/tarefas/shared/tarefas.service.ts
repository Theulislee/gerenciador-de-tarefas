import { Injectable } from '@angular/core';
import { Tarefa } from './';  //add Tarefa

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor() { }

  //primeiro metodo chamado listar, ele retorna todos os dados da tarefa.
  listarTodos(): Tarefa [] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

//Esse método recebe tarefa que tem 3 atributos: id/nome/concluido //void: não retorna nada.
//const tarefas chama o metodo this.listarTodos para obter todas as tarefas
//getTime usado para facilitar a vida //tarefa id criada para passamos id no construtor da classe tarefa
//tarefas.push... estamos passando a tarefa para o ultimo
//localStorage['tarefas']... convertendo a tarefa atravé do utilitário stringify
  cadastrar(tarefa:Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa); //
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
