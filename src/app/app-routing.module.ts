import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TarefaRoutes } from './tarefas'; //add import da pasta tarefas

export const routes: Routes = [
{
//add outra indicação do path
path:'',
redirectTo:'/tarefas/listar',
pathMatch: 'full'
},
...TarefaRoutes //add modo ts para concatenar com as rotas principal e add o import acima
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
