import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarifComponent } from './tarif.component';

const routes: Routes = [
  {path: ':id', component: TarifComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarifRoutingModule { }
