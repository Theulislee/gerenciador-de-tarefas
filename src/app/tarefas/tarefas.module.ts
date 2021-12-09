import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasService } from './shared';
import { ListarTarefaComponent } from './listar'; //add import de TarefasService //atualizando: apagar o restante deixando listar
import { RouterModule } from '@angular/router'; //add import do RouterModule para o Angular reconhecer
import { FormsModule } from '@angular/forms'; //add import do FormsModule para o Angular reconhecer


@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefasService // add import de TarefasService
  ]
})
export class TarefasModule { }
