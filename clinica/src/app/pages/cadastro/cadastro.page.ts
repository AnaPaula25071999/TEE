import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(
    private nav: NavController
  ) { }

  ngOnInit(): void {

  }

  agend(){
    this.nav.navigateBack('consulta');
  }  
  cadusu(){
    this.nav.navigateBack('usuario');
  }  
  back(){
    this.nav.navigateBack('home');
  }  
  
}
