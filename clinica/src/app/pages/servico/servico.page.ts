import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.page.html',
  styleUrls: ['./servico.page.scss'],
})
export class ServicoPage implements OnInit {

  constructor(
    private nav: NavController

  ) { }

  ngOnInit() {

    
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
  
}
