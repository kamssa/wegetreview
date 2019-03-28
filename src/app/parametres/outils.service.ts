import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OutilsService {

  constructor(private router: Router) { }

  public goto(url:string){
    this.router.navigate([url]);
  }

  public is_current_path(path:string){
    return this.router.url === path;
  }

  public is_current_has_parent_path(path: string){
    this.router.relativeLinkResolution === path;
  }

  public init_number_tab(nb: number){
    let tab: number[] = [];
    if(nb > 0){
      for(let i=0; i<nb; i++){
        tab[i] = i;
      }
    }
    return tab;
  }

  public update_number_tab(nb: number, db: number){
    let tab: number[] = [];
    if(db < nb){
      tab = this.init_number_tab(nb - db);
    }else{
      tab = this.init_number_tab(0);
    }
    return tab;
  }
}
