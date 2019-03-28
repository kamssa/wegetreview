export class TarifModel {
  id?: number;
  version?: number;
  titre?: string;
  prix?: number;
  dureeTarif?: number;
  typeDuree?: string;
  description: string;
  id_EspaceModel: number;
  isFree?: boolean;
  free?: boolean;
  prixSpecial?: number;
}

