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
  back(){
    this.nav.navigateBack('home');
  }  

  lista = [
    {nome: 'ana', data: '25/09/2023', especi:'Patologia'},

  ];

  showdetails(consul: any){
    console.log(consul);
    
  }

}
