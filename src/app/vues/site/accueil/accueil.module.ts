import { OmeletteMetierService } from 'src/app/metiers/omelette-metier.service';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { EspaceMetierService } from 'src/app/metiers/espace-metier.service';
import { ComposantsModule } from '../../../composants/composants.module';
import { PartenaireMetierService } from 'src/app/metiers/partenaire-metier.service';

@NgModule({
  imports: [
    CommonModule,
    AccueilRoutingModule,
    HttpClientModule,
    ComposantsModule
  ],
  declarations: [
    AccueilComponent
  ],
  providers: [
    OmeletteMetierService,
    EspaceMetierService,
    PartenaireMetierService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AccueilModule { }
