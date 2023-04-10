import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})

  export class ConsultaPage implements OnInit {

    constructor(
      private nav: NavController
    ) { }
    ngOnInit(): void {
  
    }
    back(){
      this.nav.navigateBack('home');
    }  
    listpe(){
      this.nav.navigateBack('listpet');
    } 

  }