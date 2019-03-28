export class CommandeModel {
  id?: number;
  version?: number;
  titre?: string;
  prix?: number;
  dureeTarif?: number;
  typeDuree?: string;
  description: string;
  idBlock: number;
  isFree?: boolean;
  free?: boolean;
  prixSpecial?: number;
}

