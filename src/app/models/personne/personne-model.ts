import {AdresseModel} from '../personne/adresse-model';
import {TelephoneModel} from '../personne/telephone-model';
// import {EntrepriseModel} from '../combo/';
// import {typeStatut} from '../type-statut';
// import {CvPersonne} from '../cv-personne';
// import {Contrat} from './contrat';
import {ComboLangueModel} from '../combo/comboLangue-model';
import { RoleModel } from './role-model';

export class PersonneModel {

    id ?: number = null;
    version?: number = 0;
    cni ?: string;
    titre ?: string;
    nom ?: string;
    prenom ?: string;
    password ?: string;
    repassword?: string;
    actived ?: boolean;
	nomComplet ?: string;
	nomProfile? : string;
    pathPhoto ?: string;
    pathPhotoCouveture ?: string;
    nombreVue ?: string;
    groupSanguin ?: string;
    dateNaissance ?: Date;
    genre ?: string;
    roles ?: RoleModel[];
    type?: string;
    adresse ?: AdresseModel;
    login ?: string;
    // entreprise ?: EntrepriseModel;
    telephones?: TelephoneModel[];
	telephone?: TelephoneModel;
	code?: number;
    langues?: ComboLangueModel[];
    // cvPersonne?: CvPersonne;
    // typeStatut ?: TypeStatut;
    couleur?: string;
    description?: string;
    enabled?: boolean;
	utlisateurBanni?: boolean;
	utlisateurSuspendu?: boolean;
	utlisateurEnAttente?: boolean;

	public bannir() {
		this.utlisateurBanni = true;
		this.utlisateurSuspendu = false;
		this.utlisateurEnAttente = false;
		this.enabled = false;
	}
	public restaurer() {
		this.utlisateurBanni = false;
		this.utlisateurSuspendu = false;
		this.utlisateurEnAttente = false;
		this.enabled = true;
	}
	public activer() {
		this.restaurer();
	}
	public suspendre() {
		this.utlisateurBanni = false;
		this.utlisateurSuspendu = true;
		this.utlisateurEnAttente = false;
		this.enabled = false;
	}
	public enAttente() {
		this.utlisateurBanni = false;
		this.utlisateurSuspendu = false;
		this.utlisateurEnAttente = true;
		this.enabled = false;
	}

}
