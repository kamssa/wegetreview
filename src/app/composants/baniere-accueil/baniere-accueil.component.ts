import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import {MatCard} from '@angular/material';


@Component({
  selector: 'cpn-baniere-accueil',
  templateUrl: './baniere-accueil.component.html',
  styleUrls: ['./baniere-accueil.component.scss']
})
export class BaniereAccueilComponent implements OnInit {
  @Input() image: string = "../../../assets/images/Magasins-pilles-police-visee-Les-images-de-l-acte-18-des-Gilets-jaunes-a-Paris.jpg";
  @ViewChild(MatCard) formulaire: MatCard;
  formulaire_flottant: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  check_formulaire_barriere(event){
  	let formulas: HTMLCollectionOf<Element> = document.getElementsByClassName('formulaire');
  	let formula: any = formulas.item(0);
  	if(window.scrollY > formula.offsetTop - 68){
  		this.formulaire_flottant = true;
  	} else {
  		this.formulaire_flottant = false;
  	}
  }

}
