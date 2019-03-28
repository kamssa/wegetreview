import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { AccueilModule } from './accueil/accueil.module';
import { ComposantsModule } from '../../composants/composants.module';


@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule,
    ComposantsModule
  ],
  declarations: [SiteComponent]
})
export class SiteModule { }
