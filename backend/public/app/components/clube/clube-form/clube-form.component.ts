import { Component, OnInit } from '@angular/core';
import { ClubeService } from '../../../services/clube.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clube-form',
  templateUrl: './clube-form.component.html',
  styleUrls: ['./clube-form.component.scss']
})
export class ClubeFormComponent implements OnInit {
  clube: any = {
    clb_nome:"",
    clb_pais:"",
    clb_atletasEstrangeiros:""
  };
  teste:any;
  modalidades:any;

  constructor(
    public clubeS: ClubeService,
    public router: Router,
    public actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe(
      params => {
        if(params.codigo){
          this.clubeS.listar(params.codigo).subscribe(
            resp => {
              this.clube = resp[0];
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
    this.router.navigate(['clube']);
  }

  enviar(){
    console.log(this.clube);
    let check:boolean = true;
    Object.keys(this.clube).map(item => {if(this.clube[item].length < 1){
      check = false;
    }});

    if(check){
      if(this.clube.clb_codigo){
        this.clubeS.atualizar(this.clube).subscribe(
          sucess => this.router.navigate(['clube']),
          error => {
            if(error.status == 200){
              console.log('Atualisado');
              this.router.navigate(['clube']);
            } else {
              console.error(error);
            }
          }
        );
      } else {
        this.clubeS.criar(this.clube).subscribe(
          sucess => this.router.navigate(['clube']),
          error => {
            if(error.status == 201){
              console.log('Criado');
              this.router.navigate(['clube']);
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
