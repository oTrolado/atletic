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
    this.router.navigate(['modalidade']);
  }

  enviar(){
    let check:boolean = true;
    Object.keys(this.modalidade).map(key => {
      if(this.modalidade[key].length < 1){
        alert('Preencha todos os campos');
        check = false;
      }  
    }); 

    if(check){
      if(this.modalidade.mod_codigo){
        this.service.atualizar(this.modalidade).subscribe(
          susses => this.sucesso('Atualizado'),
          error => {
            if(error.status == 200){
              this.sucesso('Atualizado');
            } else {
              console.error(error);
            }
          }
        );
      } else {
        this.service.criar(this.modalidade).subscribe(
          susses => this.sucesso('Criado'),
          error => {
            if(error.status == 201){
              this.sucesso('Criado');
            } else {
              console.error(error);
            }
          }
        ); 
      }
    }
  }

  sucesso(mensagem){
    console.log(mensagem);
    this.cancelar();
  }

}
