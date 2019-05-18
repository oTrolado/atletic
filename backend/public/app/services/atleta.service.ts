import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor(private http: HttpClient) { }

  listarTodos(){
    return this.http.get('http://localhost:3000/atleta');
  }

  listar(codigo){
    return this.http.get('http://localhost:3000/atleta/'+codigo);
  }

  criar(atleta:any){
    return this.http.post('http://localhost:3000/atleta/',atleta);
  }

  atualizar(atleta:any){
    return this.http.put('http://localhost:3000/atleta/',atleta);
  }
  
  deletar(codigo){
    return this.http.delete('http://localhost:3000/atleta/'+codigo);
  }
}
