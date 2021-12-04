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
}
