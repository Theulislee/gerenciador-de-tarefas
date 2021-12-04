import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasService } from './shared'; //add import de TarefasService



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TarefasService // add import de TarefasService
  ]
})
export class TarefasModule { }
