import { Component, OnInit } from '@angular/core';
import { AbonnementMetierService } from 'src/app/metiers/abonnement-metier.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CvPersonneMetierService } from 'src/app/metiers/cv-personne-metier.service';
import { switchMap } from 'rxjs/operators';

/*
export interface Abonne{
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
*/

@Component({
  selector: 'app-profile-competence',
  templateUrl: './profile-competence.component.html',
  styleUrls: ['./profile-competence.component.scss']
})
export class ProfileCompetenceComponent implements OnInit {
  /*isValid:boolean;

  abonne: Abonne;
  abonnes: Abonne []=[
    {
      id:1, 
      nom:'Kouamé Sylvain',
      loveIt:75, 
      nbVue:45,
      anneeExp:5,
      specialite:'Maintenancier', 
      pays:'Côte d\'Ivoire',
      langues:['Anglais','Français'],
      status: true
    },
    {
      id:2, 
      nom:'Néhemie Konan',
      loveIt:65, 
      nbVue:55,
      anneeExp:3,
      specialite:'Developpeur', 
      pays:'France',
      langues:['Anglais','Français'],
      status: false
    },
    {
      id:3, 
      nom:'Innocent Kassi',
      loveIt:105, nbVue:85,
      anneeExp:8,
      specialite:'Designer', 
      pays:'Allemange',
      langues:['Anglais','Français'],
      status: false
    },
    {
      id:4, 
      nom:'Joël Djoué',
      loveIt:175, 
      nbVue:145,
      anneeExp:2,
      specialite:'Developpeur', 
      pays:'Chine',
      langues:['Anglais','Français'],
      status: true
    }
  ]
  constructor(private abonneMetier: AbonnementMetierService,
    private route: ActivatedRoute,
    private cvMetier: CvPersonneMetierService) { }
*/
  ngOnInit() {
    /*this.abonne = {
      id:4, 
      nom:'Joël Djoué',
      loveIt:175, 
      nbVue:145,
      anneeExp:2,
      specialite:'Developpeur', 
      pays:'Chine',
      langues:['Anglais','Français'],
      status: true
    };
    // this.route.paramMap.subscribe(params => {
    //   this.abonnes.forEach((p: Abonne) => {
    //     if (p.id == +params.get('id')) {
    //       this.abonne = p;
    //       this.isValid = true;
    //     }
    //   });
    // });*/
  }

  /*onGetNumAbonne(){

  }

  onContactAbonne(){

  }

  activatchat(){

  }

  handleClick(){

  }*/
}
