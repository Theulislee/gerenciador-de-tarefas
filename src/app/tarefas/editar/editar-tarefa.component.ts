import { TarefasService } from './../shared/tarefas.service';
import { Component, OnInit, ViewChild } from '@angular/core'; //ViewChild adicionado
import { NgForm } from '@angular/forms'; //add import para @viewChild metodo
import { Tarefa } from '..'; //add import para Tarefa metodo
import { ActivatedRoute, Router } from '@angular/router'; //add ActivatedRoute and Router metodo

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm; //add método ViewChild
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefasService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; //variavel add
    this.tarefa = this.tarefaService.buscarPorId(id); //add a dinamica
  }

  //add metodo atualizar
  atualizar(): void {
    if(this.formTarefa.form.valid) {
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

}
