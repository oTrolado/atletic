import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalidadeListComponent } from './components/modalidade/modalidade-list/modalidade-list.component';
import { ModalidadeFormComponent } from './components/modalidade/modalidade-form/modalidade-form.component';
import { AtletaListComponent } from './components/atleta/atleta-list/atleta-list.component';
import { AtletaFormComponent } from './components/atleta/atleta-form/atleta-form.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {path: 'modalidade', component: ModalidadeListComponent},
  {path: 'modalidade/novo', component: ModalidadeFormComponent},
  {path: 'modalidade/:codigo', component: ModalidadeFormComponent},
  {path: 'atleta', component: AtletaListComponent},
  {path: 'atleta/novo', component: AtletaFormComponent},
  {path: 'atleta/:codigo', component: AtletaFormComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
