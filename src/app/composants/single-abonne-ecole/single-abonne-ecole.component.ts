import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AppConfig} from '../../parametres/app-config';


@Component({
  selector: 'app-single-abonne-ecole',
  templateUrl: './single-abonne-ecole.component.html',
  styleUrls: ['./single-abonne-ecole.component.scss']
})
export class SingleAbonneEcoleComponent implements OnInit {

  _image: string = AppConfig.assets.placeholder_image;
  @Input('image') image: string = this._image;
  @Input('connected') connected: boolean = false;
  @Input('_id') _id: number = 0;
  @Input('ghost') ghost: boolean = false;
  @Output() onProfile = new EventEmitter<number>(null);
  @Output() onContacter = new EventEmitter<number>(null);
  constructor() { 
  }

  ngOnInit() {
    
  }

  profile() {
    this.onProfile.emit(this._id);
  }

  contacter() {
    this.onContacter.emit(this._id);
  }

}
