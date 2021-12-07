
import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';


export const TarefaRoutes: Routes =[

  { //atalho para tarefas/listar, e em seguida irá redirecionar para tarefas/listar
  path: 'tarefas',
  redirectTo: 'tarefas/listar'
},

{ //primeira rota principal, quando digitar tarefas/listar exibirá conteúdo de tarefaComponent
  path: 'tarefas/listar',
  component: ListarTarefaComponent
}
]
