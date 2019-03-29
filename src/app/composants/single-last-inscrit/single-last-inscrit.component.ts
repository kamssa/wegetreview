import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import {AppConfig} from '../../parametres/app-config';

type SingleLastInscritType = {id: number, type: string};

@Component({
  selector: 'cpn-single-last-inscrit',
  templateUrl: './single-last-inscrit.component.html',
  styleUrls: ['./single-last-inscrit.component.scss']
})
export class SingleLastInscritComponent implements OnInit, OnChanges {
  _image: string = AppConfig.assets.placeholder_avatar;
  @Input('image') image: string = this._image;
  @Input('nom') nom: string = 'Indefini';
  @Input('fonction') fonction: string = 'Indefini';
  @Input('type') _type: string = '';
  @Input('_id') _id: number = 0;
  @Input('ghost') ghost: boolean = false;
  @Output() onContacter = new EventEmitter<SingleLastInscritType>(null);

  constructor() { }

  ngOnInit() {
    this.check_image();
  }

  ngOnChanges(changes){
    this.check_image();
  }

  check_image(){
    if(this.image === null || this.image === '' || this.image === 'null'){
      this.image = this._image;
    }
  }
  contacter(){
    this.onContacter.emit({id: this._id, type: this._type});
  }

}
