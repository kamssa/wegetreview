import {MembreModel} from '../personne/membre-model';
import { AbonnementModel } from '../abonnement/abonnement-model';

export class DocumentModel {
	id?: number = null;
	version?: number = 0;
	titre?: string = '';
	description?: string = '';
	pathDocument?: string = '';
	abonnement?: AbonnementModel = null;
}