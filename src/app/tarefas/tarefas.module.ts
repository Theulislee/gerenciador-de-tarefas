import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasService } from './shared';
import { ListarTarefaComponent } from './listar'; //add import de TarefasService //atualizando: apagar o restante deixando listar



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
