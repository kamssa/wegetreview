import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetenceRoutingModule } from './competence-routing.module';
import { CompetenceComponent } from './competence.component';
import { ComposantsModule } from '../../../composants/composants.module';

@NgModule({
  declarations: [CompetenceComponent],
  imports: [
    CommonModule,
    CompetenceRoutingModule,
    ComposantsModule

  ]
})
export class CompetenceModule { }
