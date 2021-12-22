import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]' //Alterado para forma mais curta
})
export class TarefaConcluidaDirective implements OnInit {

  //add Input para entrada de dado, para passar ao Html.

    @Input() tarefaConcluida: boolean;

  //add private el: ElementRef, que é uma referencia Html que add.
    constructor(private el: ElementRef) {}

    ngOnInit() {
    if (this.tarefaConcluida) {
       this.el.nativeElement.style.textDecoration = "line-through";
    }
  }
}
