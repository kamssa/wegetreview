import {CoursModel} from '../ecole/cours-model';
import { EcoleModel } from './ecole-model';

export class  FormationModel{
	
	constructor(
		public id?:number,
		public version?:number,
		public titre?:string,
		public description?:string,
		public formation_niveau?:string,
		public contenu?:string,
		public dureeFormation?:string,
		public diplome?:string,
		public formation_prix?:string,
		public pathPhoto?:string,
		public pathFormulaire?:string,
		public pathCatalogue?:string,
		public programme?: CoursModel[],
		public ecole?: EcoleModel
	) {}
}