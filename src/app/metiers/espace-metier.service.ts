import { Injectable } from '@angular/core';
import { EspaceCrudService } from '../crud/espace-crud.service';
import { EspaceModel } from '../models/espace/espace-model';
import { Observable } from 'rxjs';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class EspaceMetierService {

  constructor(private espaceCrud: EspaceCrudService) { }
 /* recupere tous les espaces*/ 
  getAllEspace(){
    return this.espaceCrud.getAll();
  }

  creeEspace(){
    return new Observable((observer)=>{
      let espace: EspaceModel = new EspaceModel();
      this.espaceCrud.create(espace).subscribe(res=>{
        let resu = new ResultatsModel();
        resu.data = espace;
        observer.next(resu);
      })
    });
  }

}
