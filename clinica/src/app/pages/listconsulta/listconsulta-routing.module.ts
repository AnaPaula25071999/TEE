import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListconsultaPage } from './listconsulta.page';

const routes: Routes = [
  {
    path: '',
    component: ListconsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListconsultaPageRoutingModule {}
