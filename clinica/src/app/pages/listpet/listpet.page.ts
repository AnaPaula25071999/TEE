import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-listpet',
  templateUrl: './listpet.page.html',
  styleUrls: ['./listpet.page.scss'],
})
export class ListpetPage implements OnInit {

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
  cpet(){
    this.nav.navigateBack('cadpet');
  }  
  cons(){
    this.nav.navigateBack('listconsulta');
  }  

  lista = [
    {nome: 'Frida', idade: '2', raca:'Siamês'},
    {nome: 'Marley', idade: '7', raca:'SRD'}
  ];

  showdetails(pet: any){
    console.log(pet);
    
  }

}
