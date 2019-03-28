import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileEcoleRoutingModule } from './profile-ecole-routing.module';
import { ProfileEcoleComponent } from './profile-ecole.component';

@NgModule({
  declarations: [ProfileEcoleComponent],
  imports: [
    CommonModule,
    ProfileEcoleRoutingModule
  ]
})
export class ProfileEcoleModule { }
