import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalidadeService } from '../../../services/modalidade.service';

@Component({
  selector: 'app-modalidade-form',
  templateUrl: './modalidade-form.component.html',
  styleUrls: ['./modalidade-form.component.scss']
})
export class ModalidadeFormComponent implements OnInit {

  modalidade:any = {};

  constructor(
    public router: Router,
    public actRote: ActivatedRoute,
    public service: ModalidadeService
  ) { }

  ngOnInit() {
    this.actRote.params.subscribe(
      params => {
        if(params.codigo){
          this.service.listar(params.codigo).subscribe(
            resp => {
              this.modalidade = resp[0];
              console.log(resp[0]);
            },
            erro => {
              console.error(erro);
            }
          );
        }
      },
      erro => console.error(erro)
    );
  }

  cancelar(){
    this.router.navigate['modalidade'];
  }

  enviar(){
    let check:boolean = true;
    Object.keys(this.modalidade).map(key => {
      if(this.modalidade[key].length < 1) alert('Preencha todos os campos');
      console.error(this.modalidade[key])
      check = false;
    });

    if(check){
      console.log(this.modalidade.mod_codigo);
    }
  }

}
