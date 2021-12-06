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

  //Ele recebe id do tipo number e irá retornar uma tarefa.
  //Novamente chama o listarTodos para obter todas as tarefas
  //find - metodo que fica dentro da lista js, e depedendo da condição retorna a tarefa correta.
  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  //atualizar recebe tarefe. verifica se o id é o mesmo para substituir o objeto sendo atualizado.
  //chamamos metodo listarTodos para obter a lista das tarefas.
  //apartir das tarefas chamamos o forEach que verifica 3 paramentros: obj, index, objs.
  //if vai verificar se o id da tarefa que estou atualizando é igual da que estou interando.
  //utilizo objs que seria copiadas tarefas/ index seria a posicao 0 1 2 3 e atribuo a tarefa.
  //localStorage['tarefas'] associaria minha lista de tarefas atualizadas
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id:number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !==id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
