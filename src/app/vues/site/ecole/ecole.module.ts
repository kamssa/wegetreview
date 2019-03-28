import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcoleRoutingModule } from './ecole-routing.module';
import { EcoleComponent } from './ecole.component';
import { ComposantsModule } from 'src/app/composants/composants.module';

@NgModule({
  declarations: [EcoleComponent],
  imports: [
    CommonModule,
    EcoleRoutingModule,
    ComposantsModule
  ]
})
export class EcoleModule { }
