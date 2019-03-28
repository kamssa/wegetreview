import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AppConfig } from '../parametres/app-config';
import { HttpClient } from '@angular/common/http';
import { ComboVilleModel }from '../models/combo/comboVille-model';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class ComboVilleCrudService {

  comboVille_path = AppConfig.baseURL + "comboVille/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<ComboVilleModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<ComboVilleModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<ComboVilleModel>>{
    return this.http.get<ResultatsModel<ComboVilleModel>>(this.comboVille_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboVilleModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<ComboVilleModel>>{
    return this.http.get<ResultatsModel<ComboVilleModel>>(this.comboVille_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboVilleModel>>('ajoutMessage'))
    );
  }

  
  create(data: ComboVilleModel): Observable<ResultatsModel<ComboVilleModel>>{
    return this.http.post<ResultatsModel<ComboVilleModel>>(this.comboVille_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboVilleModel>>('create'))
    );
  }

  update(data: ComboVilleModel): Observable<ResultatsModel<ComboVilleModel>>{
    return this.http.put<ResultatsModel<ComboVilleModel>>(this.comboVille_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboVilleModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<ComboVilleModel>>{
    return this.http.delete<ResultatsModel<ComboVilleModel>>(this.comboVille_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboVilleModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
