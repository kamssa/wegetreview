import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {AppConfig} from '../../parametres/app-config';

type VoirAbonneType = {id: number, type: string};

@Component({
  selector: 'app-single-espace',
  templateUrl: './single-espace.component.html',
  styleUrls: ['./single-espace.component.scss']
})
export class SingleEspaceComponent implements OnInit {

  _image: string = AppConfig.assets.placeholder_image;
  @Input('image') image: string = this._image;
  @Input('espace') espace: any;
  @Input('titre') titre: string = 'Hommes de métier';
  @Input('_id') _id: number = 0;
  @Input('type') _type: string = '';
  @Input('ghost') ghost: boolean = false;
  @Output() onSabonner = new EventEmitter<number>(null);
  @Output() onVoirAbonnes = new EventEmitter<VoirAbonneType>(null);

  constructor() {
  }

  ngOnInit() {

  }
   sabonner() {
    this.onSabonner.emit(this._id);
  }

  voirAbonnes() {
    this.onVoirAbonnes.emit({id: this._id, type: this._type});
  }

}
