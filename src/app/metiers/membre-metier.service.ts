import { Injectable } from '@angular/core';
import { MembreCrudService } from '../crud/membre-crud.service';
import { Observable } from 'rxjs';
import { MembreModel } from '../models/personne/membre-model';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class MembreMetierService {

  constructor(private membreCrud : MembreCrudService ) { }

  getMembreBy(param){
    return new Observable((observer)=> {
      observer.next([]);
      observer.error("Method empty!");
    });
  }
}
