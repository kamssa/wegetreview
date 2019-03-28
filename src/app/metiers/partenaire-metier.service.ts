import { Injectable } from '@angular/core';
import { PartenaireCrudService } from '../crud/partenaire-crud.service';
import { Observable } from 'rxjs';
import { PartenaireModel } from '../models/ecole/partenaire-model';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class PartenaireMetierService {
  lterminate: any=[];
  ligneCarousel: any=[];
  constructor(private partenaireCrud: PartenaireCrudService) { }

/*Voir les partenaire */
getPartenaire(param = 4){
  return new Observable((observer)=> {
      this.partenaireCrud.getAll().subscribe((res:any) => {
        if(res.status == 0 && res.body){
            if(res.body.length > 0) {
                this.carouselLoad(param, res.body).subscribe((resbody: any) => {
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
                  this.lterminate.push(abonneFlash[xx]);
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
