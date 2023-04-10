import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListpetPageRoutingModule } from './listpet-routing.module';

import { ListpetPage } from './listpet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListpetPageRoutingModule
  ],
  declarations: [ListpetPage]
})
export class ListpetPageModule {}
