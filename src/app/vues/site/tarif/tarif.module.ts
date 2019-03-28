import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposantsModule } from '../../../composants/composants.module';

import { TarifRoutingModule } from './tarif-routing.module';
import { TarifComponent } from './tarif.component';

@NgModule({
  declarations: [TarifComponent],
  imports: [
    CommonModule,
    TarifRoutingModule,
    ComposantsModule
  ]
})
export class TarifModule { }

