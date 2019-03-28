import { Component, OnInit, Input } from '@angular/core';
import {AppConfig} from '../../parametres/app-config';

@Component({
  selector: 'cpn-booster-profil',
  templateUrl: './booster-profil.component.html',
  styleUrls: ['./booster-profil.component.scss']
})
export class BoosterProfilComponent implements OnInit {
  _image: string = AppConfig.assets.placeholder_avatar;
  @Input('image') image: string = this._image;
  @Input('lien') lien: string = "";
  @Input('nom') nom: string = "";
  @Input('fonction') fonction: string = "";
  @Input('experience') experience: number = 0;
  @Input('facebook') facebook: string = "";
  @Input('twitter') twitter: string = "";
  @Input('linkedin') linkedin: string = "";
  @Input('ghost') ghost: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
