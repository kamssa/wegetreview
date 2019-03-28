import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { ComposantsModule } from '../../composants/composants.module';
import {AuthGuardTogetService} from '../../guards/auth-guard-toget.service';


@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule,
    ComposantsModule
  ],
  declarations: [SiteComponent],
  providers: [AuthGuardTogetService]
})
export class SiteModule { }
