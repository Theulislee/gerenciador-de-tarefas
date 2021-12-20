import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasService } from './shared'; // add import de TarefaSService
import { ListarTarefaComponent } from './listar'; //add import de TarefasService //atualizando: apagar o restante deixando listar
import { RouterModule } from '@angular/router'; //add import do RouterModule para o Angular reconhecer
import { FormsModule } from '@angular/forms'; //add import do FormsModule para o Angular reconhecer
import { CadastrarTarefaComponent } from './cadastrar'; //reduzido para cadastrar
import { EditarTarefaComponent } from './editar';//reduzido para editar
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive'; //add import directiva do tarefa concluida


@NgModule({
  declarations: [
    ListarTarefaComponent, //add listar
    CadastrarTarefaComponent, //add cadastrar
    EditarTarefaComponent, TarefaConcluidaDirective //add editar
  ],
  imports: [
    CommonModule,
    RouterModule, //add RouterModule do import
    FormsModule //add FormsModule do import
  ],
  providers: [
    TarefasService // add import de TarefasService
  ]
})
export class TarefasModule { }
