import { CompetenceComponent } from './competence.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteComponent } from '../site.component';

const routes: Routes = [
  {path: ':id', component: CompetenceComponent},
  {path: 'profile', loadChildren: './profile-competence/profile-competence.module#ProfileCompetenceModule'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenceRoutingModule { }
