import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  lista = [
    {nome: 'ana', email: 'ana@email.com', idade: 25},
    {nome: 'paula', email: 'paula@email.com', idade: 35},

  ];

  titulo = "Usuários";

  footer = "Ana Paula castro"

  constructor() { }

  ngOnInit() {
  }

  showdetails(pessoa: any){
    console.log(pessoa);
    
  }

}