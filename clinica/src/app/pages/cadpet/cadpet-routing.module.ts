import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadpetPage } from './cadpet.page';

const routes: Routes = [
  {
    path: '',
    component: CadpetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadpetPageRoutingModule {}



