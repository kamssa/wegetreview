import { Component, OnInit, Input } from '@angular/core';
import {AppConfig} from '../../parametres/app-config';

@Component({
  selector: 'cpn-single-partenaire',
  templateUrl: './single-partenaire.component.html',
  styleUrls: ['./single-partenaire.component.scss']
})
export class SinglePartenaireComponent implements OnInit {
  _image: string = AppConfig.assets.placeholder_image;
  @Input('image') image: string = this._image;
  @Input('lien') lien: string = null;
  @Input('ghost') ghost: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
