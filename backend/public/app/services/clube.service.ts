import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClubeService {

  constructor(private http: HttpClient) { }

  listarTodos(){
    return this.http.get('http://localhost:3000/clube');
  }

  listar(codigo){
    return this.http.get('http://localhost:3000/clube/'+codigo);
  }

  criar(clube:any){
    return this.http.post('http://localhost:3000/clube/',clube);
  }

  atualizar(clube:any){
    return this.http.put('http://localhost:3000/clube/',clube);
  }
  
  deletar(codigo){
    return this.http.delete('http://localhost:3000/clube/'+codigo);
  }
}
