import { SiteComponent } from './site.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardTogetService} from '../../guards/auth-guard-toget.service';

const routes: Routes = [
  {path: '',canActivate : [AuthGuardTogetService], component: SiteComponent, children: [
    {path: '', loadChildren: './accueil/accueil.module#AccueilModule'},
    {path: 'annonce', loadChildren: './annonce/annonce.module#AnnonceModule'},
    {path: 'competence', loadChildren: './competence/competence.module#CompetenceModule'},
    {path: 'ecole', loadChildren: './ecole/ecole.module#EcoleModule'},
    {path: 'immobilier', loadChildren: './immobilier/immobilier.module#ImmobilierModule'},
    {path: 'tarif', loadChildren: './tarif/tarif.module#TarifModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
