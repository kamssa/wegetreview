import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoliBoutonComponent } from './joli-bouton/joli-bouton.component';
import { PageAbonnesHeaderComponent } from './page-abonnes-header/page-abonnes-header.component';
import { SingleAbonneEcoleComponent } from './single-abonne-ecole/single-abonne-ecole.component';
import { SingleAbonneCompetentComponent } from './single-abonne-competent/single-abonne-competent.component';
import { SingleAbonneImmoComponent } from './single-abonne-immo/single-abonne-immo.component';
import { SingleAbonneAnnonceComponent } from './single-abonne-annonce/single-abonne-annonce.component';
import { ContactAbonneComponent } from './contact-abonne/contact-abonne.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule, MatChipsModule, MatDialogModule, MatDividerModule,
  MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatOptionModule, MatSelectModule,
  MatSidenavModule, MatSnackBarModule, MatTabsModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatTooltipModule, MatCheckboxModule,
  MatBadgeModule,MatAutocompleteModule
} from '@angular/material';
import { SingleEspaceComponent } from './single-espace/single-espace.component';
import { CpButtonComponent } from './cp-button/cp-button.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BaniereAccueilComponent } from './baniere-accueil/baniere-accueil.component';
import { SingleAbonneSpecialComponent } from './single-abonne-special/single-abonne-special.component';
import { CarouselAlphaComponent } from './carousel-alpha/carousel-alpha.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { SinglePartenaireComponent } from './single-partenaire/single-partenaire.component';
import { PubZoneComponent } from './pub-zone/pub-zone.component';
import { BoosterProfilComponent } from './booster-profil/booster-profil.component';
import { SingleLastInscritComponent } from './single-last-inscrit/single-last-inscrit.component';
import { SingleServiceEntrepriseComponent } from './single-service-entreprise/single-service-entreprise.component';
import { LimitTextPipe } from './pipes/limit-text.pipe';

const routes: Routes = [
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatDividerModule,
    MatOptionModule,
    MatTabsModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatAutocompleteModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatDividerModule,
    MatOptionModule,
    MatTabsModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatAutocompleteModule,
    CpButtonComponent,
    SingleEspaceComponent,
    ToolbarComponent,
    RouterModule,
    BaniereAccueilComponent,
    SingleAbonneSpecialComponent,
    SingleAbonneCompetentComponent,
    SiteFooterComponent,
    SinglePartenaireComponent,
    PubZoneComponent,
    BoosterProfilComponent,
    SingleLastInscritComponent,
    SingleServiceEntrepriseComponent,
    LimitTextPipe
  ],
  declarations: [
    JoliBoutonComponent,
    PageAbonnesHeaderComponent,
    SingleAbonneEcoleComponent,
    SingleAbonneCompetentComponent,
    SingleAbonneImmoComponent,
    SingleAbonneAnnonceComponent, ContactAbonneComponent,
    SingleEspaceComponent, CpButtonComponent,
    ToolbarComponent, BaniereAccueilComponent,
    SingleAbonneSpecialComponent, CarouselAlphaComponent, SiteFooterComponent, SinglePartenaireComponent,
    PubZoneComponent, BoosterProfilComponent, SingleLastInscritComponent, SingleServiceEntrepriseComponent,
    LimitTextPipe
  ]
})
export class ComposantsModule { }
