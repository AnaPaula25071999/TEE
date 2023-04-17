import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListconsultaPageRoutingModule } from './listconsulta-routing.module';

import { ListconsultaPage } from './listconsulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListconsultaPageRoutingModule
  ],
  declarations: [ListconsultaPage]
})
export class ListconsultaPageModule {}
