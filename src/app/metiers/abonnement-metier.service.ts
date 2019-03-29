import {Injectable} from '@angular/core';
import {AbonnementCrudService} from '../crud/abonnement-crud.service';
import {Observable} from 'rxjs';
import {AbonnementModel} from '../models/abonnement/abonnement-model';
import {ResultatsModel} from '../models/resultats-model';
import {AppConfig} from '../parametres/app-config';

@Injectable({
  providedIn: 'root'
})
export class AbonnementMetierService {
  lterminate: any = [];
  ligneCarousel: any = [];
  private oBjectAbonne: any = {
    'description': 'Espace vide',
    'pathPhoto': null,
    'membre': {
      'nomComplet': 'espace disponible!',
      'nomProfile': 'espace disponible!'
    },
    'cvPersonne': {
      'specialite': 'Disponible',
      'anneExperience': '0',
    },
    'nombreVue': 0,
    'active': true,
    'abonneSpecial': true,
  };

  constructor(private abonnementCrud: AbonnementCrudService) {
  }


  /* REQUETE ABONNEE*/


// recuperer un membre par son login
  getAbonnementByMembreLogin(data: string) {
    return this.abonnementCrud.getAbonnementByLogin(data);

  }

  /* profil d'un abonné*/
  getAbonnementById(id: number) {
    return new Observable((observer) => {
      this.abonnementCrud.get(id).subscribe((res: any) => {
        if (res) {
          if (res.status == 0 && res.body) {

              observer.next({status: 200, body: res.body});

          } else {
            observer.next({status: 404, body: [], message: "Contenu inexistant!"});
          }
        } else {
          observer.next({status: 404, body: [], message: "Aucun retour trouvé!"});
        }
      }, (error) => {
        observer.error({status: 404, body: [], message: "Erreur fatal verifier votre connexion et réessayer!"});
      });
    });
  }

  /*Voir les abonnés d'un espace */
  getAbonnementByIdEspace(id: number) {
    return new Observable((observer) => {
      this.abonnementCrud.getAbonnementByIdEspace(id).subscribe((res: any) => {
        if (res) {
          if (res.status == 0 && res.body) {

              observer.next({status: 200, body: res.body});

          } else {
            observer.next({status: 404, body: []});
          }
        } else {
          observer.next({status: 404, body: []});
        }
      }, (error) => {
        observer.error({status: 404, body: []});
      });
    });
  }

  /*Voir les abonnés d'un espace */
  getAbonnementSpecial(param = 4) {
    return new Observable((observer) => {
      this.abonnementCrud.getAbonnementSpecial().subscribe((res: any) => {
        if (res && res.status == 0 && res.body) {

            this.carouselLoad(param, res.body).subscribe((resbody: any) => {
              observer.next({status: 200, body: resbody});
            });

        } else {
          observer.next({status: 404, body: []});
        }
      }, (error) => {
        observer.error({status: 404, body: []});
      });
    });
  }

  getAbonneByFiltre(param) {
    return new Observable((observer) => {
      let retour: any = [];
      this.abonnementCrud.getAll().subscribe((res: any) => {
        //console.log("membres", res);
        if (res) {
          if (res.status == 0 && res.body) {

              let m: any[] = res.body.reverse();
              if (param > 0) {
                retour = m.slice(0, param);
              }
              observer.next({status: 404, body: retour});

          } else {
            observer.next({status: 404, body: []});
          }

        } else {
          observer.next({status: 404, body: []});
        }
      }, (error) => {
        observer.error({status: 404, body: []});
      });
    });
  }

  setUpdateVue(param: AbonnementModel) {
    return new Observable((observer) => {
      this.abonnementCrud.updateVue(param).subscribe((res: any) => {
        if (res) {
          if (res.status == 0 && res.body) {
            observer.next({status: 200, body: res.body});
          } else {
            observer.next({status: 404, body: []});
          }

        } else {
          observer.next({status: 404, body: []});
        }
      }, (error) => {
        observer.error({status: 404, body: []});
      });
    });
  }


// Traitement function metier
  carouselLoad(param, abonneFlash: any = []) {
    return new Observable((observer) => {
      if (abonneFlash) {
        const taille = abonneFlash.length;
        const tt = param;
        const ligneTab = Math.ceil(taille / tt);
        let xx = 0;
        for (let i = 0; i < ligneTab; i++) {
          let j = i * tt;
          for (let k = j; k < j + tt; k++) {
            if (k < taille) {
              abonneFlash[k].default = false;
              this.lterminate.push(abonneFlash[k]);
            } else {
              if (i === ligneTab - 1) {
                const f = (j + tt) - taille;
                if (j + tt > taille) {
                  const w = taille - f;
                  if (k > w) {
                    this.oBjectAbonne.default = true;
                    this.lterminate.push(this.oBjectAbonne);
                    xx++;
                    if (xx >= taille) {
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
          this.lterminate.splice(0, this.lterminate.length);
        }

        observer.next(this.ligneCarousel);
      } else {
        observer.error('erreur ligne carousel');
      }
    });
  }


  Base_url(uri = '') {
    let href_f = '';
    href_f = AppConfig.base_url;
    return href_f + uri;
  }

}
