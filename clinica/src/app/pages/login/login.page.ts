import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
  cad(){
    this.nav.navigateBack('cadastro');
  }  
  sobre(){
    this.nav.navigateBack('servico');
  }  
  lpet(){
    this.nav.navigateBack('listpet');
  }  
  
}