import { Component, OnInit } from '@angular/core';
import { TarifModel } from 'src/app/models/espace/tarif-model';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.scss']
})
export class TarifComponent implements OnInit {
  tarifs: TarifModel[]=[
    {
      id: 1,
      version: 0,
      titre: 'Gratuit',
      prix: 0,
      dureeTarif: 14,
      typeDuree: 'Jours',
      description: 'string',
      id_EspaceModel: 1,
      isFree: true,
      free: true,
      prixSpecial: 0
    },
    {
      id: 1,
      version: 0,
      titre: 'Ok',
      prix: 2990,
      dureeTarif: 1,
      typeDuree: 'Mois',
      description: 'string',
      id_EspaceModel: 1,
      isFree: true,
      free: true,
      prixSpecial: 200
    },
    {
      id: 1,
      version: 0,
      titre: 'TOP',
      prix: 4990,
      dureeTarif: 3,
      typeDuree: 'Mois',
      description: 'string',
      id_EspaceModel: 1,
      isFree: true,
      free: true,
      prixSpecial: 200
    },
    {
      id: 1,
      version: 0,
      titre: 'YES',
      prix: 9990,
      dureeTarif: 12,
      typeDuree: 'Mois',
      description: 'string',
      id_EspaceModel: 1,
      isFree: true,
      free: true,
      prixSpecial: 200
    }
  ]

  constructor() { }

  ngOnInit() {

  }
  onPayer(idBlock: number, id: number){

  }

}
