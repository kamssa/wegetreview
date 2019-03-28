import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspaceModel } from 'src/app/models/espace/espace-model';
import { AbonnementModel } from 'src/app/models/abonnement/abonnement-model';
import { PartenaireMetierService } from 'src/app/metiers/partenaire-metier.service';
import { MembreMetierService } from 'src/app/metiers/membre-metier.service';
import { EspaceMetierService } from 'src/app/metiers/espace-metier.service';
import { AbonnementMetierService } from 'src/app/metiers/abonnement-metier.service';
import { OutilsService } from 'src/app/parametres/outils.service';
import { TarifModel } from 'src/app/models/espace/tarif-model';

export interface AbonneSpecial{
  id?:number;
  nom?:string;
  loveIt? : number;
  specialite?:string;
  nbVue?: number;
  photo?: string;
  anneeExp?:number;
}
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  abonneSpeciaux: AbonneSpecial []=[
    {id:1, nom:'Kouamé Sylvain',loveIt:75, nbVue:45,anneeExp:5,specialite:'Maintenancier'},
    {id:2, nom:'Néhemie Konan',loveIt:65, nbVue:55,anneeExp:3,specialite:'Developpeur'},
    {id:3, nom:'Innocent Kassi',loveIt:105, nbVue:85,anneeExp:8,specialite:'Designer'},
    {id:4, nom:'Joël Djoué',loveIt:175, nbVue:145,anneeExp:2,specialite:'Developpeur'}
  ]
  abonneSpecial: AbonneSpecial = {id:5, nom:'Traoré Abdoulaye',loveIt:25, nbVue:245,anneeExp:8,specialite:'Developpeur'};
  espaces: EspaceModel[] = [];

  abonnes: AbonnementModel[] = [];
  __abonnes: number[] = this.outils.init_number_tab(4);
  membres: AbonnementModel[] = [];
  __membres: number[] = this.outils.init_number_tab(4);

  services_entreprises: any[] = [];
  __services_entreprises: number[] = this.outils.init_number_tab(3);

  constructor(private abonneMetier: AbonnementMetierService,
              private espaceMetier: EspaceMetierService,
              private router: Router,
              private partenaireMetier: PartenaireMetierService,
              private membreMetier: MembreMetierService,
              public outils: OutilsService) { }

  ngOnInit() {
    this.fetchAllEspace();
    this.fetchAbonneSpeciaux();
    this.fetchAllPartenaireSite();
    this.fetchAllAbonnesEspace();
    let membre:any
    this.abonneMetier.getAbonneByFiltre(4).subscribe(
      res=>{
        console.log(this.__membres);
        membre = res;
        this.membres = membre;
        this.__membres = this.outils.update_number_tab(4, this.membres.length);
        console.log(this.membres);
        console.log(this.__membres);
      },
      err=>{
        console.log(err)
      }
    );

  }

  handleProfile(data: any){
    this.router.navigate(['site',data.type,'profile',data.id]);
  }
  handleOnSabonner(id: number){
    this.router.navigate(['site/tarif',id]);
  }
  handleVoirAbonnes(data:any){
    this.router.navigate(['site/',data.type, data.id])
  }

  fetchAllEspace (){
    let espace : any;
    this.espaceMetier.getAllEspace().subscribe(res=>{
      espace = res;
      this.espaces = espace.body;
      console.log(this.espaces);
    });
  }

  fetchAbonneSpeciaux(){
    let lignes: any;
    this.abonneMetier.getAbonnementSpecial().subscribe(
      res =>{
        lignes = res;
        this.abonnes = lignes;
        if(this.abonnes.length > 0){
          this.__abonnes = this.outils.update_number_tab(0, this.abonnes.length);
        }
        console.log('abonnes',this.abonnes);
      },
      err => {
        console.log(err);
      }
    );
  }

  fetchAllPartenaireSite(){
    let partenaire: any;
    this.partenaireMetier.getPartenaire().subscribe(
      res=>{
        partenaire = res;
        console.log('Partenaire :',partenaire)
      },
      err =>{
        console.log(err);
      }
    );
  }

  goto(url:string){
    this.router.navigateByUrl(url);
  }

  fetchAllAbonnesEspace(){
    let abonne: any
    this.abonneMetier.getAbonnementByIdEspace(1).subscribe(
      res=>{
        abonne = res;
        console.log(abonne);
      },
      err =>{
        console.log(err);
      }
    );
  }
}
