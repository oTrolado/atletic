import { Component, OnInit } from '@angular/core';

import{ ClubeService } from '../../../services/clube.service';

@Component({
  selector: 'app-clube-list',
  templateUrl: './clube-list.component.html',
  styleUrls: ['./clube-list.component.scss']
})
export class ClubeListComponent implements OnInit {

  clubes:any;

  constructor(public service: ClubeService) { }

  ngOnInit() {
    this.service.listarTodos().subscribe(
      sucess => {
        this.clubes = sucess;
        console.log(this.clubes);
      },
      error => {
        if(error.status == 200){
          this.clubes = error;
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
