import { Injectable } from '@angular/core';
import { AbonnementCrudService } from '../crud/abonnement-crud.service';
import { Observable } from 'rxjs';
import { AbonnementModel } from '../models/abonnement/abonnement-model';
import { ResultatsModel } from '../models/resultats-model';
import { AppConfig } from '../parametres/app-config';
@Injectable({
  providedIn: 'root'
})
export class AbonnementMetierService {
  lterminate:any=[];
  ligneCarousel:any=[];
  private oBjectAbonne:any={
    "createdAt": "2019-03-25T11:54:32Z",
    "updatedAt": "2019-03-25T11:54:32Z",
    "id": 0,
    "version": 0,
    "description": "Espace vide",
    "pathPhoto": null,
    "pathPhotoCouveture": null,
    "dateAbonnement": null,
    "membre": {
      "type": "ME",
      "createdAt": "2019-03-21T18:02:45Z",
      "updatedAt": "2019-03-21T18:02:45Z",
      "id": 0,
      "version": 0,
      "cni": null,
      "titre": null,
      "nom": "Disponible",
      "prenom": "",
      "actived": false,
      "nomComplet": "espace disponible!",
      "nomProfile": null,
      "pathPhoto": null,
      "pathPhotoCouveture": null,
      "nombreVue": null,
      "groupSanguin": null,
      "dateNaissance": null,
      "genre": null,
      "adresse": null,
      "login": "joel@gmail.com",
      "telephone": null,
      "code": 1553191364092,
      "telephones": [],
      "langues": [],
      "couleur": null,
      "utlisateurBanni": false,
      "utlisateurSuspendu": false,
      "utlisateurEnAttente": false,
      "dateOfBirth": null,
      "age": null,
      "enabled": false,
      "accountNonExpired": false,
      "accountNonLocked": false,
      "credentialsNonExpired": false,
      "authorities": null,
      "roles": [],
      "description": null,
      "entreprise": null,
      "handler": {},
      "username": "info@toget.com",
      "hibernateLazyInitializer": {}
    },
    "espace": {
      "createdAt": null,
      "updatedAt": null,
      "id": 1,
      "version": 0,
      "libelle": "Disponible",
      "pathPhoto": null,
      "description": null,
      "typeEspace": "competence",
      "position": 0,
      "handler": {},
      "hibernateLazyInitializer": {}
    },
    "nombreVue": 0,
    "dateExpire": null,
    "dateExpireAbonneSpecial": null,
    "active": true,
    "abonneSpecial": true,
    "free": true,
    "dategratuite": null,
    "utlisateurBanni": false,
    "utlisateurSuspendu": false,
    "utlisateurEnAttente": false,
    "idEspace": 0,
    "idPersone": 0,
    "longitude": 0,
    "latitude": 0
  };
  constructor(private abonnementCrud: AbonnementCrudService) { }
  /*récupérer les abonnés d'un espace */

  Base_url(uri=""){
      let href_f = "";
      href_f = AppConfig.base_url;
      return href_f+uri;
  }
  getAbonnementByMembreLogin(data: string){
    return this.abonnementCrud.getAbonnementByLogin(data);

  }
  /* profil d'un abonné*/
getAbonnementById(id: number){
  return new Observable((observer)=> {
    this.abonnementCrud.get(id).subscribe((res:any) => {
      if(res) {
        if (res.status == 0 && res.body) {
          if (res.body.length > 0) {
            console.log(res);
            observer.next(res.body);
          } else {
            observer.error([]);
          }
        } else {
          observer.error("Retour null !");
        }
      }else{
        observer.error("Erreur survenue !");
      }
    });
  });
}
/*Voir les abonnés d'un espace */
getAbonnementByIdEspace(id: number){
  return new Observable((observer)=> {
    this.abonnementCrud.getAbonnementByIdEspace(id).subscribe((res:any) => {
      if(res) {
        if (res.status == 0 && res.body) {
          if (res.body.length > 0) {
            observer.next(res.body);
          } else {
            observer.error([]);
          }
        } else {
          observer.error("Retour null !");
        }
      }else{
        observer.error("Erreur survenue !");
      }
    });
  });
}

  /*Voir les abonnés d'un espace */
getAbonnementSpecial(param = 4){
  return new Observable((observer)=> {
      this.abonnementCrud.getAbonnementSpecial().subscribe((res:any) => {
        if(res && res.status == 0 && res.body){
            if(res.body.length > 0) {
                this.carouselLoad( param, res.body).subscribe((resbody: any) => {
                  observer.next(resbody);
                });
            }else{
                  observer.error([]);
            }
        }else{
                observer.error("Erreur survenue !");
        }
      });
  });
}

  getAbonneByFiltre(param){
    return new Observable((observer)=> {
      let retour:any=[];
      this.abonnementCrud.getAll().subscribe((res:any) => {
        //console.log("membres", res);
        if(res) {
          if (res.status == 0 && res.body) {
            if (res.body.length > 0) {
              let m: any[] = res.body.reverse();
              if (param > 0) {
                retour = m.slice(0, param);
              }
              observer.next(retour);

            } else {
              observer.error([]);
            }
          } else {
            observer.error("Erreur survenue veuillez réessayez plus tard!");
          }

        }else{
          observer.error("Erreur, la requête n'a pas abouti");
        }
      });
    });
  }

  carouselLoad(param, abonneFlash:any=[]){
    return new Observable((observer)=> {
    if(abonneFlash){
      let taille = abonneFlash.length;
      let tt =param;
      let ligneTab = Math.ceil(taille/tt);
      let xx = 0;
      for (let i = 0; i < ligneTab; i++) {
        let	j= i*tt;
        for (let k=j ; k < j+tt; k++) {
          if(k < taille){
            this.lterminate.push(abonneFlash[k]);
          }else{
            if(i == ligneTab - 1){
              let f = (j+tt) - taille;
              if(j+tt > taille){
                let w = taille - f;
                if(k > w){
                  this.oBjectAbonne.pathPhoto = this.Base_url("assets/default.png");
                  this.oBjectAbonne.membre.pathPhoto = this.Base_url("assets/default.png");
                  this.oBjectAbonne.espace.pathPhoto = this.Base_url("assets/default.png");
                  this.oBjectAbonne.default = true;
                  this.lterminate.push(this.oBjectAbonne);
                  //console.log(this.oBjectAbonne);
                  xx++;
                  if(xx >= taille){
                    xx = 0;
                  }
                }
              }
            }
          }
        }
        this.ligneCarousel[i] = this.lterminate;
        this.lterminate = [];
        this.lterminate.length = 0;
        this.lterminate.splice(0, this.lterminate.length) ;
      }

      observer.next(this.ligneCarousel);
    }else{
      observer.error("erreur ligne carousel");
    }
    });
  }


}
