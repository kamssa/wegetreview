import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AppConfig } from '../parametres/app-config';
import { HttpClient } from '@angular/common/http';
import { PanierModel }from '../models/espace/panier-model';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class PanierCrudService {

  panier_path = AppConfig.baseURL + "panier/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<PanierModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<PanierModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<PanierModel>>{
    return this.http.get<ResultatsModel<PanierModel>>(this.panier_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PanierModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<PanierModel>>{
    return this.http.get<ResultatsModel<PanierModel>>(this.panier_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PanierModel>>('ajoutMessage'))
    );
  }

  
  create(data: PanierModel): Observable<ResultatsModel<PanierModel>>{
    return this.http.post<ResultatsModel<PanierModel>>(this.panier_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PanierModel>>('create'))
    );
  }

  update(data: PanierModel): Observable<ResultatsModel<PanierModel>>{
    return this.http.put<ResultatsModel<PanierModel>>(this.panier_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PanierModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<PanierModel>>{
    return this.http.delete<ResultatsModel<PanierModel>>(this.panier_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PanierModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
