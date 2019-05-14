import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalidadeListComponent } from './components/modalidade/modalidade-list/modalidade-list.component';
import { ModalidadeFormComponent } from './components/modalidade/modalidade-form/modalidade-form.component';

const routes: Routes = [
  {path: 'modalidade', component: ModalidadeListComponent},
  {path: 'modalidade/novo', component: ModalidadeFormComponent},
  {path: 'modalidade/:codigo', component: ModalidadeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
