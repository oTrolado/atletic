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

  criar(modalidade:any){
    return this.http.post('http://localhost:3000/modalidade/',modalidade);
  }

  atualizar(modalidade:any){
    return this.http.put('http://localhost:3000/modalidade/',modalidade);
  }
  
  deletar(codigo){
    return this.http.delete('http://localhost:3000/modalidade/'+codigo);
  }
}
