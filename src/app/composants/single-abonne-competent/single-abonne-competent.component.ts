import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AppConfig} from '../../parametres/app-config';

@Component({
  selector: 'cpn-single-abonne-competent',
  templateUrl: './single-abonne-competent.component.html',
  styleUrls: ['./single-abonne-competent.component.scss']
})
export class SingleAbonneCompetentComponent implements OnInit {
	_image: string = AppConfig.assets.placeholder_avatar;
	@Input('image') image: string = this._image;
	@Input('experience') experience: number = 0;
	@Input('connected') connected: boolean = false;
	@Input('vues') vues: number = 0;
	@Input('localite') localite: string = 'Indefini';
	@Input('nom') nom: string = 'Indefini';
	@Input('fonction') fonction: string = 'Indefini';
	@Input('langues') langues: string[] = [];
	@Input('_id') _id: number = 0;
	@Input('ghost') ghost: boolean = false;
	@Output() onProfile = new EventEmitter<number>(null);
	@Output() onContacter = new EventEmitter<number>(null);

  	constructor() { }

	ngOnInit() {
	}

	profile(){
		this.onProfile.emit(this._id);
	}

	contacter(){
		this.onContacter.emit(this._id);
	}

}
