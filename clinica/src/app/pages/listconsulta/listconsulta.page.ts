import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listconsulta',
  templateUrl: './listconsulta.page.html',
  styleUrls: ['./listconsulta.page.scss'],
})
export class ListconsultaPage implements OnInit {

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }
  back(){
    this.nav.navigateBack('home');
  }  
  lpet(){
    this.nav.navigateBack('listpet');
  }  
  cons(){
    this.nav.navigateBack('consulta');
  }  


  lista = [
    {nome: 'Frida', data: '25/09/2023', hora: '15:30', especi:'Patologia'},
    {nome: 'Marley', data: '09/09/2023', hora: '9:00', especi:'Fisioterapia'}
  ];

  showdetails(consul: any){
    console.log(consul);
    
  }

}


