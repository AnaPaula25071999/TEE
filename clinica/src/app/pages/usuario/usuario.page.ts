import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {


    constructor(
      private nav: NavController
    ) { }
  
    ngOnInit(): void {
  
    }
  
    login(){
      this.nav.navigateBack('cadastro');
    }  

    back(){
      this.nav.navigateBack('home');
    }  
    
}
