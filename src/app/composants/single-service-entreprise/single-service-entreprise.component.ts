import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AppConfig} from '../../parametres/app-config';

@Component({
  selector: 'cpn-single-service-entreprise',
  templateUrl: './single-service-entreprise.component.html',
  styleUrls: ['./single-service-entreprise.component.scss']
})
export class SingleServiceEntrepriseComponent implements OnInit {
  _image: string = AppConfig.assets.placeholder_image;
  @Input('image') image: string = this._image;
  @Input('titre') titre: string = 'Indefini';
  @Input('description') description: string = 'Indefini';
  @Input('_id') _id: number = 0;
  @Input('ghost') ghost: boolean = true;
  @Output() onVoirPlus = new EventEmitter<number>(null);

  constructor() { }

  ngOnInit() {
  }

  voirPlus(){
    this.onVoirPlus.emit(this._id);
  }

}
