import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadpetPageRoutingModule } from './cadpet-routing.module';

import { CadpetPage } from './cadpet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadpetPageRoutingModule
  ],
  declarations: [CadpetPage]
})
export class CadpetPageModule {}
