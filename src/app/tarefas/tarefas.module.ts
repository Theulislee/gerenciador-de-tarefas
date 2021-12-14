import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasService } from './shared'; // add import de TarefaSService
import { ListarTarefaComponent } from './listar'; //add import de TarefasService //atualizando: apagar o restante deixando listar
import { RouterModule } from '@angular/router'; //add import do RouterModule para o Angular reconhecer
import { FormsModule } from '@angular/forms'; //add import do FormsModule para o Angular reconhecer
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar/editar-tarefa.component'; //add import do FormsModule para o Angular reconhecer //reduzido para cadastrar


@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent
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
