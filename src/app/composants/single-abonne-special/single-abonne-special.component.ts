import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AppConfig} from '../../parametres/app-config';

@Component({
  selector: 'cpn-single-abonne-special',
  templateUrl: './single-abonne-special.component.html',
  styleUrls: ['./single-abonne-special.component.scss']
})
export class SingleAbonneSpecialComponent implements OnInit {
  _image: string = AppConfig.assets.placeholder_avatar;
  @Input('image') image: string = this._image;
  @Input('nom') nom: string = "";
  @Input('likes') likes: number = 0;
  @Input('vues') vues: number = 0;
  @Input('fonction') fonction: string = "";
  @Input('experience') experience: number = 0;
  @Input('ghost') ghost: boolean = false;
  @Input('_id') _id: number = 0;
  @Output() viewProfile = new EventEmitter<number>(null);

  constructor() { }

  ngOnInit() {
  }

  clickProfile(){
    this.viewProfile.emit(this._id);
  }

}
