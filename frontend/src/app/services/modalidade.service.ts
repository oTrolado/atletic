import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModalidadeService {

  constructor(private http: HttpClient) { }

  listarTodos(){
    return this.http.get('http://localhost:3000/modalidade');
  }

  listar(codigo){
    return this.http.get('http://localhost:3000/modalidade/'+codigo);
  }
}
