import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private nav: NavController
  ) { }
  
  ngOnInit(): void {
  }

  agend(){
    this.nav.navigateBack('consulta');
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
  cadusu(){
    this.nav.navigateBack('usuario');
  }  
  logpet(){
    this.nav.navigateBack('login');
  }  

}