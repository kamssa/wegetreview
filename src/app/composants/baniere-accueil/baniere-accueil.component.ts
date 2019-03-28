import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cpn-baniere-accueil',
  templateUrl: './baniere-accueil.component.html',
  styleUrls: ['./baniere-accueil.component.scss']
})
export class BaniereAccueilComponent implements OnInit {
  @Input() image: string = "../../../assets/images/Magasins-pilles-police-visee-Les-images-de-l-acte-18-des-Gilets-jaunes-a-Paris.jpg";

  constructor() { }

  ngOnInit() {
  }

}
