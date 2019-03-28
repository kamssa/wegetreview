import { EcoleModel } from './ecole-model';

export class FlashInfoModel {
	constructor(
		public id?: number,
		public version?: number,
		public contenu?: string,
		public etat?: boolean,
		public date?: string,
		public ecole?: EcoleModel
		){}
}
