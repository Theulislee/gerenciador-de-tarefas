import { TarefasService } from './../shared/tarefas.service';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '..';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private TarefasService: TarefasService) { }

  ngOnInit(): void {
  }

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
