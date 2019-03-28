import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileCompetenceRoutingModule } from './profile-competence-routing.module';
import { ProfileCompetenceComponent } from './profile-competence.component';
import { ComposantsModule } from '../../../../composants/composants.module';


@NgModule({
  declarations: [ProfileCompetenceComponent],
  imports: [
    CommonModule,
    ProfileCompetenceRoutingModule,
    ComposantsModule
  ]
})
export class ProfileCompetenceModule { }
