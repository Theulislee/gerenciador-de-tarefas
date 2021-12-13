import { Component, OnInit, ViewChild } from '@angular/core'; //add viewChild
import { NgForm } from '@angular/forms'; //add NgForm que está add na class
import { TarefasService, Tarefa } from '../shared'; //add import para validação do tarefa: Tarefa
import { Router } from '@angular/router'; //add import de modulo de rotas Router


@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

//add validacao do angular que vai permitir referência de formulário html
//NgForm é a classe padrão do angular que deve ser importada
  @ViewChild('formTarefa') formTarefa: NgForm;

  tarefa: Tarefa //add para associar campo de texto da interface html

  constructor(
    private tarefasservice: TarefasService,  //add metodo TarefasService
    private router: Router  //add para o angular injentar o serviço
  ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa(); //add instancia tarefa para fazer associação com interface
  }

  //if(...) ele vai irá retornar o true ou false, se conter algum erro ele não irá fazer o cadastro
  //this.tarefasservice.cadastrar irá passar o metodo e chama o método this.tarefa
  //this.router.navigate irá voltar para tela de listagem de tarefa.e no fim irá voltar a tela "/tarefas"
  cadastrar(): void {
    if(this.formTarefa.form.valid) {
      this.tarefasservice.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }

}
