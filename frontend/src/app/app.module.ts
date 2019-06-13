import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

import { ModalidadeListComponent } from './components/modalidade/modalidade-list/modalidade-list.component';
import { ModalidadeFormComponent } from './components/modalidade/modalidade-form/modalidade-form.component';
import { AtletaListComponent } from './components/atleta/atleta-list/atleta-list.component';
import { AtletaFormComponent } from './components/atleta/atleta-form/atleta-form.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ClubeListComponent } from './components/clube/clube-list/clube-list.component';
import { ClubeFormComponent } from './components/clube/clube-form/clube-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalidadeListComponent,
    ModalidadeFormComponent,
    AtletaListComponent,
    AtletaFormComponent,
    HomeComponent,
    ClubeListComponent,
    ClubeFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
