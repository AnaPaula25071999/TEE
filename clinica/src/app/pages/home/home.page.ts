import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//controlador junção da view e model para exibição na página
constructor(
  private nav: NavController
) { }
ngOnInit(): void {

}
home(){
  this.nav.navigateBack('home');
}  
cad(){
  this.nav.navigateBack('cadastro');
}  
sobre(){
  this.nav.navigateBack('sobre');
}  
}