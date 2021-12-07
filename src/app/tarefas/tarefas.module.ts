import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasService } from './shared';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component'; //add import de TarefasService



@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TarefasService // add import de TarefasService
  ]
})
export class TarefasModule { }
