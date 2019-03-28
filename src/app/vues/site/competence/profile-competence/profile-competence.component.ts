import { Component, OnInit } from '@angular/core';
// import { AbonnementMetierService } from 'src/app/metiers/abonnement-metier.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { CvPersonneMetierService } from 'src/app/metiers/cv-personne-metier.service';
import { switchMap } from 'rxjs/operators';
// import { AbonnementModel } from 'src/app/models/abonnement/abonnement-model';

@Component({
  selector: 'app-profile-competence',
  templateUrl: './profile-competence.component.html',
  styleUrls: ['./profile-competence.component.scss']
})
export class ProfileCompetenceComponent implements OnInit {

  // abonne: AbonnementModel;
  
  constructor(
    // private abonneMetier: AbonnementMetierService,
    // private route: ActivatedRoute,
    // private cvMetier: CvPersonneMetierService
    ) { }

    
  ngOnInit() {}
  //   let ab: any;
  //   this.route.paramMap.pipe(
  //     switchMap((params: ParamMap) =>
  //     this.abonneMetier.getAbonnementById(+params.get('id')))
  //   ).subscribe(
  //     res => {
  //       ab = res;
  //       this.abonne = ab;
  //       console.log(this.abonne);
  //     },
  //     err =>{
  //       console.log(err);
  //     }
  //   );
  // }

  // onGetNumAbonne(){

  // }

  // onContactAbonne(){

  // }

  // activatchat(){

  // }

  // handleClick(){

  // }
}
