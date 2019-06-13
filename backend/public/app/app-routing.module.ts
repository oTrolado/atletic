import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalidadeListComponent } from './components/modalidade/modalidade-list/modalidade-list.component';
import { ModalidadeFormComponent } from './components/modalidade/modalidade-form/modalidade-form.component';
import { AtletaListComponent } from './components/atleta/atleta-list/atleta-list.component';
import { AtletaFormComponent } from './components/atleta/atleta-form/atleta-form.component';
import { ClubeListComponent } from './components/clube/clube-list/clube-list.component';
import { ClubeFormComponent } from './components/clube/clube-form/clube-form.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {path: 'modalidade', component: ModalidadeListComponent},
  {path: 'modalidade/novo', component: ModalidadeFormComponent},
  {path: 'modalidade/:codigo', component: ModalidadeFormComponent},
  {path: 'atleta', component: AtletaListComponent},
  {path: 'atleta/novo', component: AtletaFormComponent},
  {path: 'atleta/:codigo', component: AtletaFormComponent},
  {path: 'clube', component: ClubeListComponent},
  {path: 'clube/novo', component: ClubeFormComponent},
  {path: 'clube/:codigo', component: ClubeFormComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
