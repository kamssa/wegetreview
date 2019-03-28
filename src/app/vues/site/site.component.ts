import { Component, OnInit } from '@angular/core';
import { ToolbarItems } from 'src/app/composants/toolbar/toolbar.component';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  toolbar_items: ToolbarItems[] = [
    {
      title: 'Accueil',
      action: null,
      link: '/site',
      icon: null,
      position: 'left',
      primary: 'primary',
      secondary: 'secondary',
      strict_link: true
    },
    {
      title: 'A propos',
      action: null,
      link: '/site/annonce',
      icon: null,
      position: 'left',
      primary: 'primary',
      secondary: 'secondary',
      strict_link: false
    },
    {
      title: 'Contacts',
      action: null,
      link: '/site/ecole',
      icon: null,
      position: 'left',
      primary: 'primary',
      secondary: 'secondary',
      strict_link: false
    },
    {
      title: null,
      action: null,
      link: '/site/competence',
      icon: 'shopping_cart',
      position: 'right',
      primary: 'primary',
      secondary: 'secondary',
      strict_link: false
    },
    {
      title: 'Inscription',
      action: null,
      link: '/site/tarif',
      icon: null,
      position: 'right',
      primary: 'primary',
      secondary: 'secondary',
      strict_link: false
    },
    {
      title: 'Connexion',
      action: null,
      link: '/site/immobilier',
      icon: null,
      position: 'right',
      primary: 'primary',
      secondary: 'secondary',
      strict_link: false
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
