import { Component, OnInit } from '@angular/core';
import{ AtletaService } from '../../../services/atleta.service';

@Component({
  selector: 'app-atleta-list',
  templateUrl: './atleta-list.component.html',
  styleUrls: ['./atleta-list.component.scss']
})
export class AtletaListComponent implements OnInit {

  atletas:any;

  constructor(public service: AtletaService) { }

  ngOnInit() {
    this.service.listarTodos().subscribe(
      sucess => {
        this.atletas = sucess;
        console.log(this.atletas);
      },
      error => {
        if(error.status == 200){
          this.atletas = error;
        } else {
          console.error(error);
        }
      }
    );
  }

  excluir(codigo){
    this.service.deletar(codigo).subscribe(
      sucess => this.ngOnInit(),
      error => {
        if(error.status == 200) this.ngOnInit();
        else console.error(error);
      }
    );
  }

}
