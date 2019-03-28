import {EcoleModel} from './ecole-model';

export class ChiffreModel {
	// private detailAbonnement: DetailAbonnement;
	constructor(
		public id?: number,
		public version?: number,
		public titre?: string,
		public chiffre?: string,
		public description?: string,
		public id_DetailAbonnement?: number
		// public detailAbonnement?: DetailAbonnement
		) {}

	// public setDetailAbonnement(sb: DetailAbonnement){
	// 	this.detailAbonnement = sb;
	// }
}
