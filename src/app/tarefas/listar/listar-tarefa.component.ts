import { TarefasService } from './../shared/tarefas.service';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '..'; //importe de Tarefa add

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {
// tarefas do tipo array de Tarefa
  tarefas: Tarefa[];

  constructor(private TarefasService: TarefasService) { }

// Associando o listarTodos para as tarefas atribuido dentro da class ListarTarefa...
  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }
  //add metodo que irá retornar uma lista de tarefas do que procura em tarefas do tipo array de Tarefa
  listarTodos(): Tarefa[] {
    return this.TarefasService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.TarefasService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.TarefasService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

}
