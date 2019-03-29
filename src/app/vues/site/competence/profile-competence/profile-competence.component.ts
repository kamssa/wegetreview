import { Component, OnInit } from '@angular/core';
import { AbonnementModel } from 'src/app/models/abonnement/abonnement-model';
import { AbonnementMetierService } from 'src/app/metiers/abonnement-metier.service';
import { Router, ParamMap, ActivatedRoute, RouterState,
 RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile-competence',
  templateUrl: './profile-competence.component.html',
  styleUrls: ['./profile-competence.component.scss']
})
export class ProfileCompetenceComponent implements OnInit {

  abonne: AbonnementModel;
  
  constructor(
    private abonneMetier: AbonnementMetierService,
    route: ActivatedRoute,
    router: Router
    ) {
      let ab: any;
      const id: string = route.snapshot.params.ids;
      console.log(id);
      this.abonneMetier.getAbonnementById(+id).subscribe(
        res => {
          ab = res;
          console.log('Resultat complet de la bd',ab);
          this.abonne = ab.body;
          console.log(this.abonne);
        }
      );
    }

    
  ngOnInit() {
    
  }

  onGetNumAbonne(){

  }

  onContactAbonne(){

  }

  activatchat(){

  }

  handleClick(){

  }
}
