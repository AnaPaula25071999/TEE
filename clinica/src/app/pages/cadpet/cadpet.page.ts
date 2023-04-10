import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadpet',
  templateUrl: './cadpet.page.html',
  styleUrls: ['./cadpet.page.scss'],
})
export class CadpetPage implements OnInit {

  public nomecat: string = '';
  public idade: string = '';
  public raca: string = '';
  public generocat: string = '';

  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
  }

  back(){
    this.nav.navigateBack('home');
  }

  cad(){
    this.nav.navigateBack('listpet');
  }

  send(){
    console.log(this.nomecat);
    console.log(this.idade);
    console.log(this.raca);
    console.log(this.generocat);

    const nomecat = this.nomecat;
    const idade = this.idade;
    const raca = this.raca;
    const generocat = this.generocat;

    const dat = {nomecat, idade, raca, generocat};

    console.log(dat);

    localStorage.setItem('gato', JSON.stringify(dat));

    
  }

}
