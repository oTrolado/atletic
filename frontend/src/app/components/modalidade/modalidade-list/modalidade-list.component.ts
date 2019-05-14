import { Component, OnInit } from '@angular/core';
import { ModalidadeService } from '../../../services/modalidade.service';

@Component({
  selector: 'app-modalidade-list',
  templateUrl: './modalidade-list.component.html',
  styleUrls: ['./modalidade-list.component.scss']
})
export class ModalidadeListComponent implements OnInit {

  modalidades:any = {};
  columnsToDisplay = ['nome', 'descricao', 'categoria'];

  constructor(
    public modalidadeS: ModalidadeService
  ) { }

  


  ngOnInit() {
    this.modalidadeS.listarTodos().subscribe(
      
      resp => {this.modalidades = resp; console.log(this.modalidades);},
      erro => console.error(erro)
    
    ); 
  }

}
