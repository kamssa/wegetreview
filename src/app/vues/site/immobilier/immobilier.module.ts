import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImmobilierRoutingModule } from './immobilier-routing.module';
import { ImmobilierComponent } from './immobilier.component';

@NgModule({
  declarations: [ImmobilierComponent],
  imports: [
    CommonModule,
    ImmobilierRoutingModule
  ]
})
export class ImmobilierModule { }
