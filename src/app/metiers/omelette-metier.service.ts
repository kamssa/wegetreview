import { ResultatsModel } from './../models/resultats-model';
import { Observable } from 'rxjs';
import { OeufModel } from './../models/oeuf-model';
import { OeufCrudService } from './../crud/oeuf-crud.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OmeletteMetierService {

  constructor(private oeufCrud: OeufCrudService) { }

  getAll(){
    return this.oeufCrud.getAll();
  }

  delete_omelette(id: any) {
    return this.oeufCrud.delete(id);
  }

  faire_omelette(){
    return new Observable((observer)=>{
      let oeuf: OeufModel = new OeufModel();
      oeuf.forme = 'rounde';
      oeuf.couleur = 'rouge';
      this.oeufCrud.create(oeuf).subscribe(res=>{
        let resu = new ResultatsModel();
        resu.data = oeuf;
        observer.next(resu);
      })
    });
  }
}

