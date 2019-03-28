// import {Membre} from './personne/membres/membre';
import {EspaceModel} from '../espace/espace-model';
import {AbonnementModel} from '../abonnement/abonnement-model';

export class GalleryModel {
	public id?: number;
	public version?: number;
	public libelle?: string;
	public description?: string;
	public date?: any;
	public pathPhoto?: string[];
	public pathVideo?: string[];
	public abonnement?: AbonnementModel;
	public espace?: EspaceModel;
}