import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilDashboardRoutingModule } from './accueil-dashboard-routing.module';
import { AccueilDashboardComponent } from './accueil-dashboard.component';

@NgModule({
  declarations: [AccueilDashboardComponent],
  imports: [
    CommonModule,
    AccueilDashboardRoutingModule
  ]
})
export class AccueilDashboardModule { }
