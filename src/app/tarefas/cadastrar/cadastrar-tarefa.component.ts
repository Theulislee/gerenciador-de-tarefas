import { Component, OnInit, ViewChild } from '@angular/core'; //add viewChild
import { NgForm } from '@angular/forms';
import { TarefasService, Tarefa } from '../shared'; //add import para validação do tarefa: Tarefa

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

//add validacao do angular que vai permitir referência de formulário html
  @ViewChild('formTarefa') formTarefa: NgForm;

  tarefa: Tarefa //add para associar campo de texto da interface html

  constructor() { }

  ngOnInit(): void {
  }

}
