
import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';

import { CadastrarTarefaComponent } from './cadastrar'; //add importe de rota de Cadastro da Tarefa


export const TarefaRoutes: Routes =[

  { //atalho para tarefas/listar, e em seguida irá redirecionar para tarefas/listar
  path: 'tarefas',
  redirectTo: 'tarefas/listar'
},

{ //primeira rota principal, quando digitar tarefas/listar exibirá conteúdo de tarefaComponent
  path: 'tarefas/listar',
  component: ListarTarefaComponent
},

{ //Nova rota add para carregar/direcionar para tela de listagem de cadastro
 path: 'tarefas/cadastrar',
 component: CadastrarTarefaComponent
}
]
