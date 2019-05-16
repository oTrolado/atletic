import { Component, OnInit } from '@angular/core';
import { AtletaService } from '../../../services/atleta.service';
import { ModalidadeService } from '../../../services/modalidade.service';
import { Router, ActivatedRoute } from '@angular/router';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


@Component({
  selector: 'app-atleta-form',
  templateUrl: './atleta-form.component.html',
  styleUrls: ['./atleta-form.component.scss'],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'pt-br'}]
})
export class AtletaFormComponent implements OnInit {

  atleta: any = {
    atl_nome:"",
    atl_mod:"",
    atl_pais:"",
    atl_cidade:"",
    atl_nascimento:"",
    atl_estado:""
  };
  teste:any;
  modalidades:any;

  constructor(
    public atletaS: AtletaService,
    public modalidadeS: ModalidadeService,
    public router: Router,
    public actRoute: ActivatedRoute,
    public adapter: DateAdapter<any>
  ) { }

  ngOnInit() {
    this.adapter.setLocale('pt-br');
    this.actRoute.params.subscribe(
      params => {
        if(params.codigo){
          this.atletaS.listar(params.codigo).subscribe(
            resp => {
              this.atleta = resp[0];
              this.atleta.atl_mod = "";
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
    this.modalidadeS.listarTodos().subscribe(
      resp => this.modalidades = resp,
      erro => console.error(erro)
    );
  }

  cancelar(){
    this.router.navigate(['atleta']);
  }

  enviar(){
    console.log(this.atleta);
    let check:boolean = true;
    Object.keys(this.atleta).map(item => {if(this.atleta[item].length < 1){
      check = false;
    }});

    if(check){
      if(this.atleta.atl_codigo){
        this.atletaS.atualizar(this.atleta).subscribe(
          sucess => this.router.navigate(['atleta']),
          error => {
            if(error.status == 200){
              console.log('Atualisado');
              this.router.navigate(['atleta']);
            } else {
              console.error(error);
            }
          }
        );
      } else {
        this.atletaS.criar(this.atleta).subscribe(
          sucess => this.router.navigate(['atleta']),
          error => {
            if(error.status == 201){
              console.log('Criado');
              this.router.navigate(['atleta']);
            } else {
              console.error(error);
            }
          }
        );
      }
    } else {
      alert('Preencha todos os campos');
    }
  }
}
