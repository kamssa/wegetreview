import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileCompetenceComponent } from './profile-competence.component';

const routes: Routes = [
  {path: '', component: ProfileCompetenceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileCompetenceRoutingModule { }
