// import { ComboPays } from '../combo/comboPays-model';
export class AdresseModel {

  constructor(public boitePostal?: string,
              public  email?: string,
              public  pays?: string,
              public  ville?: string,
              public  quartier?: string,
              public  adresseGeographique?: string,
              public  siteWeb?: string,
              public  longitude?: number,
              public  latitude?: number 
              ) {}
}
