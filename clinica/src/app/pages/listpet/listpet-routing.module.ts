import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListpetPage } from './listpet.page';

const routes: Routes = [
  {
    path: '',
    component: ListpetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListpetPageRoutingModule {}
