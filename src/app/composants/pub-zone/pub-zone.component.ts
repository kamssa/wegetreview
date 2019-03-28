import { Component, OnInit, Input } from '@angular/core';
import {AppConfig} from '../../parametres/app-config';

@Component({
  selector: 'cpn-pub-zone',
  templateUrl: './pub-zone.component.html',
  styleUrls: ['./pub-zone.component.scss']
})
export class PubZoneComponent implements OnInit {
  _image: string = AppConfig.assets.placeholder_image;
  @Input('image') image: string = this._image;
  @Input('lien') lien: string = null;
  @Input('hauteur') hauteur: string = '150px';
  @Input('ghost') ghost: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
