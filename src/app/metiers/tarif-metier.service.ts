import { Injectable } from '@angular/core';
import { TarifCrudService } from '../crud/tarif-crud.service';

@Injectable({
  providedIn: 'root'
})
export class TarifMetierService {

  constructor(private tarifCrud: TarifCrudService) { }
  /* les tarif d'un espace*/
  getTarifByIdEspace(id: number){
  return this.tarifCrud.getTarifByIdEspace(id);
}
}
