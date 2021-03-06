import { TarefasModule } from './tarefas/tarefas.module';  //add importe do index.ts na pasta tarefas
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  //add rotas app-routing.module nessa aplicação principal


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //add rotas app-routing.module...
    TarefasModule //add importe do index.ts na pasta tarefas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
