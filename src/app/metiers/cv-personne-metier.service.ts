import { Injectable } from '@angular/core';
import { CvPersonneCrudService } from '../crud/cv-personne-crud.service';

@Injectable({
  providedIn: 'root' 
})
export class CvPersonneMetierService {

  constructor(private cvpersonneCrud: CvPersonneCrudService) { }
  
  /* recuper les cv par abonnement*/
  getCvPersonneByIdAbonnement(id: number){
    return this.cvpersonneCrud.getCvPersonneByIdAbonnement(id);
  }

  
}
