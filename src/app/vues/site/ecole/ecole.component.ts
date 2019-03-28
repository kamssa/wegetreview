import { Component, OnInit } from '@angular/core';
export type Telephone = {
  id?:number;
  typeT?:string;
  numero?: string;
}
export type Ecole = {
  id?:number;
  nom?:string;
  nbVue?: number;
  photo?: string;
  pays?: string;
  telephones?: Telephone[];
  status?: boolean;
}
@Component({
  selector: 'app-ecole',
  templateUrl: './ecole.component.html',
  styleUrls: ['./ecole.component.scss']
})
export class EcoleComponent implements OnInit {

  defaultLogo = '/assets/images/logo-ieaabidjan.png';
  ecoles: Ecole []=[
    {
      id:1,
      nom:'Lycée le Kalys',
      nbVue:15,
      pays:'Côte d\'Ivoire',
      telephones:[
        {id:1,typeT:'mobile',numero:'07344680'},
        {id:2,typeT:'bureau',numero:'22422937'}
      ],
      status: true
    },
    {
      id:2,
      nom:'Université publique le Kalys',
      nbVue:14,
      pays:'Côte d\'Ivoire',
      telephones:[

        {id:1,typeT:'bureau',numero:'22422937'},
        {id:2,typeT:'mobile',numero:'06835233'}
      ],
      status: false
    },
    {
      id:3,
      nom:'Cabinet de Formation le Kalys',
      nbVue:4,
      pays:'Sénégal',
      telephones:[
        {id:1,typeT:'mobile',numero:'07344680'},
        {id:2,typeT:'bureau',numero:'06835233'}
      ],
      status: true
    },
    {
      id:4,
      nom:'EPP Kalys 2',
      nbVue:5,
      pays:'France',
      telephones:[
        {id:1,typeT:'bureau',numero:'07344680'},
        {id:2,typeT:'mobile',numero:'22422937'},
      ],
      status: false
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
