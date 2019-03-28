// import {PositionPublicite} from './position-publicite';
// import {Entreprise} from './personne/entreprise';
import {MembreModel} from '../personne/membre-model';

export class PubliciteModel {
	id?: number = null;
	version?: number = 0;
	titre?: string = '';
	contenu?: string = ''; 
	pathPhoto?: string = ''; 
	date?: string = ''; 
	pathVideo?: string = ''; 
	prix?: string = ''; 
	dureeTarif?: number = 0; 
	typeDuree?: string = '';
	free?: boolean = false;
	pubSpecial?: boolean = false;
	// position?: PositionPublicite = null; 
	// entreprise?: Entreprise = null; 
	membre?: MembreModel = null; 
	page?: string ='';
	lienPub?: string ='';
}