import {MembreModel} from '../personne/membre-model';
import {EspaceModel} from '../espace/espace-model';
import { CuriculumViteaModel } from './curiculumVitea-model';

export class AbonnementModel {
    id?: number;
    version?: number;
    description?: string;
    pathPhoto?: string;
    pathPhotoCouveture?: string;
    espace?: EspaceModel;
    cvPersonne?: CuriculumViteaModel
    membre?: MembreModel;
    nombreVue?:number;
    enabled?: boolean;
    active?: boolean;
    utlisateurBanni?: boolean;
    utlisateurSuspendu?: boolean;
    utlisateurEnAttente?: boolean;
    abonneSpecial?: boolean;
    longitude?: number;
    latitude?: number;
    free?: boolean;


    public bannir() {
      this.utlisateurBanni = true;
      this.utlisateurSuspendu = false;
      this.utlisateurEnAttente = false;
      this.active = false;
    }
    public restaurer() {
      this.utlisateurBanni = false;
      this.utlisateurSuspendu = false;
      this.utlisateurEnAttente = false;
      this.active = true;
    }
    public activer() {
      this.restaurer();
    }
    public suspendre() {
      this.utlisateurBanni = false;
      this.utlisateurSuspendu = true;
      this.utlisateurEnAttente = false;
      this.active = false;
    }
    public enAttente() {
      this.utlisateurBanni = false;
      this.utlisateurSuspendu = false;
      this.utlisateurEnAttente = true;
      this.active = false;
    }
}
