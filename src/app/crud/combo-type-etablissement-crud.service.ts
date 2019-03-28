import { Injectable } from '@angular/core';
import { AppConfig } from '../parametres/app-config';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { ComboTypeEtablissementModel } from '../models/combo/comboTypeEtablissement-model';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class ComboTypeEtablissementCrudService {

  comboTypeEtablissement_path = AppConfig.baseURL + "comboTypeEtablissement/";

  all_elements$ = new BehaviorSubject<ResultatsModel<ComboTypeEtablissementModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<ComboTypeEtablissementModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<ComboTypeEtablissementModel>>{
    return this.http.get<ResultatsModel<ComboTypeEtablissementModel>>(this.comboTypeEtablissement_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboTypeEtablissementModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<ComboTypeEtablissementModel>>{
    return this.http.get<ResultatsModel<ComboTypeEtablissementModel>>(this.comboTypeEtablissement_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboTypeEtablissementModel>>('ajoutMessage'))
    );
  }

  
  create(data: ComboTypeEtablissementModel): Observable<ResultatsModel<ComboTypeEtablissementModel>>{
    return this.http.post<ResultatsModel<ComboTypeEtablissementModel>>(this.comboTypeEtablissement_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboTypeEtablissementModel>>('create'))
    );
  }

  update(data: ComboTypeEtablissementModel): Observable<ResultatsModel<ComboTypeEtablissementModel>>{
    return this.http.put<ResultatsModel<ComboTypeEtablissementModel>>(this.comboTypeEtablissement_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboTypeEtablissementModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<ComboTypeEtablissementModel>>{
    return this.http.delete<ResultatsModel<ComboTypeEtablissementModel>>(this.comboTypeEtablissement_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboTypeEtablissementModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
