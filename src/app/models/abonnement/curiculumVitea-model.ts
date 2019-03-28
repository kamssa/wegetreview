// import {CursusScolaire} from './cv-personne/cursusScolaire';
import {ComboExperienceModel} from '../combo/comboExperience-model';
import {ComboContratTypeModel} from '../combo/comboContratType-model';
import { ComboPeriodeModel} from '../combo/comboPeriode-model'
import {AbonnementModel} from '../../models/abonnement/abonnement-model';


export class CuriculumViteaModel {
    id?: number = null;
    version?: number = 0;
    titre?: string = '';
    diplome?: string = '';
    specialite?: string = '';
    anneExperience?: string = '';
    motivation?: string = '';
    fonctionActuelle?: string = '';
    domaine?: string = '';
    autreSpecialite?: string[] = [];
    description?: string = '';
    pathCv?: string = '';
    abonnement?: AbonnementModel;
    dureeContrat?: string[] = [];
    periodeContrat?: string[] = [];
    disponibilite?: string[] = [];
}
