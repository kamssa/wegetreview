import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AppConfig } from '../parametres/app-config';
import { HttpClient } from '@angular/common/http';
import { ComboTarifModel }from '../models/combo/comboTarif-model';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class ComboTarifCrudService {

  comboTarif_path = AppConfig.baseURL + "comboTarif/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<ComboTarifModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<ComboTarifModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<ComboTarifModel>>{
    return this.http.get<ResultatsModel<ComboTarifModel>>(this.comboTarif_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboTarifModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<ComboTarifModel>>{
    return this.http.get<ResultatsModel<ComboTarifModel>>(this.comboTarif_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboTarifModel>>('ajoutMessage'))
    );
  }

  
  create(data: ComboTarifModel): Observable<ResultatsModel<ComboTarifModel>>{
    return this.http.post<ResultatsModel<ComboTarifModel>>(this.comboTarif_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboTarifModel>>('create'))
    );
  }

  update(data: ComboTarifModel): Observable<ResultatsModel<ComboTarifModel>>{
    return this.http.put<ResultatsModel<ComboTarifModel>>(this.comboTarif_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboTarifModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<ComboTarifModel>>{
    return this.http.delete<ResultatsModel<ComboTarifModel>>(this.comboTarif_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboTarifModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
