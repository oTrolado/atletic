import { Component, OnInit } from '@angular/core';
import { ModalidadeService } from '../../../services/modalidade.service';
import { AtletaService } from '../../../services/atleta.service';

@Component({
  selector: 'app-modalidade-list',
  templateUrl: './modalidade-list.component.html',
  styleUrls: ['./modalidade-list.component.scss']
})
export class ModalidadeListComponent implements OnInit {

  modalidades:any = {};
  columnsToDisplay = ['nome', 'descricao', 'categoria'];
  mod: any = {};

  constructor(
    public modalidadeS: ModalidadeService,
    public atletaS: AtletaService
  ) { }

  


  ngOnInit() {
    this.modalidadeS.listarTodos().subscribe(
      
      resp => {this.modalidades = resp; console.log(this.modalidades);},
      erro => console.error(erro)
    
    ); 
  }

  excluir(codigo){
    this.atletaS.listarTodos()
    .subscribe( res => {
      let a: any = res
      if(a.filter( item => item.atl_mod == codigo).length > 0)
        console.log('Impossivel deletar pois atletas possuem essa modalidade');
      else  
        this.modalidadeS.deletar(codigo).subscribe(
          sucess => this.ngOnInit(),
          erro => {
            if(erro.status == 200){
              this.ngOnInit();
            } else {
              console.error(erro);
            }
          }
        );
    },
    error => {
      if(error.status == 200)
        console.log(error);
    });
  }

}
