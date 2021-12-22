import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]' //Alterado para forma mais curta
})
export class TarefaConcluidaDirective {

  //add Input para entrada de dado, para passar ao Html.

  @Input() tarefaConcluida: Boolean;

  //add private el: ElementRef, que é uma referencia Html que add.
  constructor(private el: ElementRef) {
  }

}
