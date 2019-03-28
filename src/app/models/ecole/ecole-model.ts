import {AdresseModel} from '../personne/adresse-model';
import {AbonnementModel} from '../abonnement/abonnement-model';
import {PartenaireModel} from '../ecole/partenaire-model';
import {TemoignageModel} from '../ecole/temoignage-model';
import {ChiffreModel} from '../ecole/chiffre-model';
import {TelephoneModel} from '../personne/telephone-model';
import {TypeEtablissementModel} from '../ecole/typeEtablissement-model';


export class EcoleModel {
	id?: number = null;
	version?: number = 0;
	nom?: string = "";
	typeEtablissement?: TypeEtablissementModel = null;
	refDetailAbonnement?: string = "";
	presentation?: string = "";
	description?: string = "";
	pathPhotoCouverture?: string[] = [];
	pathLogo?: string = "";
	adresse?: AdresseModel = null;
	telephones?: TelephoneModel[] = [];
	abonnement?: AbonnementModel = null;
	chiffre?: ChiffreModel[] = [];
	partenaire?: PartenaireModel[] = [];
	temoignage?: TemoignageModel[] = [];
	idBlock?: number = null;
	// public Abonnement?: number
}
