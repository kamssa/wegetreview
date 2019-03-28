import { Injectable } from '@angular/core';
import { AppConfig } from '../parametres/app-config';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ResultatsModel } from '../models/resultats-model';
import { TarifModel } from '../models/espace/tarif-model';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TarifCrudService {

  tarif_path = AppConfig.baseURL + "tarif/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<TarifModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<TarifModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<TarifModel>>{
    return this.http.get<ResultatsModel<TarifModel>>(this.tarif_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<TarifModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<TarifModel>>{
    return this.http.get<ResultatsModel<TarifModel>>(this.tarif_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<TarifModel>>('ajoutMessage'))
    );
  }

  
  create(data: TarifModel): Observable<ResultatsModel<TarifModel>>{
    return this.http.post<ResultatsModel<TarifModel>>(this.tarif_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<TarifModel>>('create'))
    );
  }

  update(data: TarifModel): Observable<ResultatsModel<TarifModel>>{
    return this.http.put<ResultatsModel<TarifModel>>(this.tarif_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<TarifModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<TarifModel>>{
    return this.http.delete<ResultatsModel<TarifModel>>(this.tarif_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<TarifModel>>('delete'))
    );
  }
  getTarifByIdEspace(id: number): Observable<ResultatsModel<TarifModel>>{
    return this.http.get<ResultatsModel<TarifModel>>(this.tarif_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<TarifModel>>('getTarifByIdEspace'))
    );
  }
  getTarifByIdAbonnement(id: number): Observable<ResultatsModel<TarifModel>>{
    return this.http.get<ResultatsModel<TarifModel>>(this.tarif_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<TarifModel>>('getTarifByIdAbonnement'))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
