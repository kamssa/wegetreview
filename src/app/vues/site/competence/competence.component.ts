import { Component, OnInit } from '@angular/core';
import { AbonnementMetierService } from 'src/app/metiers/abonnement-metier.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AbonnementModel } from 'src/app/models/abonnement/abonnement-model';
import { CuriculumViteaModel } from 'src/app/models/abonnement/curiculumVitea-model';
import { CvPersonneMetierService } from 'src/app/metiers/cv-personne-metier.service';
import { OutilsService } from '../../../parametres/outils.service';

type cvAbonne = {abonne:AbonnementModel, cvPersonne: CuriculumViteaModel};

export type Abonne = {
  id?:number;
  nom?:string;
  loveIt? : number;
  specialite?:string;
  nbVue?: number;
  photo?: string;
  anneeExp?:number;
  pays?: string;
  langues?: string[];
  status?: boolean;
}

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {
  image_header: string;
  abonnes: AbonnementModel []=[];
  // abonnes: Abonne []=[
  //   {
  //     id:1,
  //     nom:'Kouamé Sylvain',
  //     loveIt:75,
  //     nbVue:45,
  //     anneeExp:5,
  //     specialite:'Maintenancier',
  //     pays:'Côte d\'Ivoire',
  //     langues:['Anglais','Français'],
  //     status: true
  //   },
  //   {
  //     id:2,
  //     nom:'Néhemie Konan',
  //     loveIt:65,
  //     nbVue:55,
  //     anneeExp:3,
  //     specialite:'Developpeur',
  //     pays:'France',
  //     langues:['Anglais','Français'],
  //     status: false
  //   },
  //   {
  //     id:3,
  //     nom:'Innocent Kassi',
  //     loveIt:105, nbVue:85,
  //     anneeExp:8,
  //     specialite:'Designer',
  //     pays:'Allemange',
  //     langues:['Anglais','Français'],
  //     status: false
  //   },
  //   {
  //     id:4,
  //     nom:'Joël Djoué',
  //     loveIt:175,
  //     nbVue:145,
  //     anneeExp:2,
  //     specialite:'Developpeur',
  //     pays:'Chine',
  //     langues:['Anglais','Français'],
  //     status: true
  //   }
  // ]
  __abonnes: number[] = this.outils.init_number_tab(6);

  abonnesS:any[]=[];
  cvAbonnes: any[]=[];
  constructor(private abonneMetier: AbonnementMetierService,
    route: ActivatedRoute,
    cvMetier: CvPersonneMetierService,
    public outils: OutilsService) { 
      let abs: any;
      const id: string = route.snapshot.params.id;
      console.log(id);
      this.abonneMetier.getAbonnementByIdEspace(+id).subscribe(
        res => {
          abs = res;
          console.log('Resultat complet de la bd',abs);
          this.abonnes = abs.body;
          console.log(this.abonnes);
        }
      );
    }

 ngOnInit() {
    this.fetchAllCompetence();
    this.image_header = 'assets/header-bg3.jpg';
  }


  fetchAllCompetence(){
    this.__abonnes = this.outils.update_number_tab(6, this.abonnes.length);
    // let abonnement: any;
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.abonneMetier.getAbonnementByIdEspace(+params.get('id')))
    // ).subscribe(
    //   res => {
    //     abonnement = res;
    //     this.abonnesS = abonnement;
    //     console.log(this.abonnesS);
    //     this.abonnesS.map((abonne, index)=>{
    //     this.cvMetier.getCvPersonneByIdAbonnement(abonne.id).subscribe(res => {
    //       console.log(this.cvAbonnes);
    //     });
    //   });
    // });
  }

  onViewProfileAbonne(){

  }

  onContactAbonne(){

  }

  newview(){

  }
}

