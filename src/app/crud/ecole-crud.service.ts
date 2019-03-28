import { Injectable } from '@angular/core';
import { AppConfig } from '../parametres/app-config';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ResultatsModel } from '../models/resultats-model';
import { EcoleModel } from '../models/ecole/ecole-model';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { getAllRouteGuards } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class EcoleCrudService {

  ecole_path = AppConfig.baseURL + "ecole/";
  

  all_elements$ = new BehaviorSubject<ResultatsModel<EcoleModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<EcoleModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<EcoleModel>>{
    return this.http.get<ResultatsModel<EcoleModel>>(this.ecole_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EcoleModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<EcoleModel>>{
    return this.http.get<ResultatsModel<EcoleModel>>(this.ecole_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EcoleModel>>('ajoutMessage'))
    );
  }

  
  create(data: EcoleModel): Observable<ResultatsModel<EcoleModel>>{
    return this.http.post<ResultatsModel<EcoleModel>>(this.ecole_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EcoleModel>>('ajoutMessage'))
    );
  }

  update(data: EcoleModel): Observable<ResultatsModel<EcoleModel>>{
    return this.http.put<ResultatsModel<EcoleModel>>(this.ecole_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EcoleModel>>('ajoutMessage'))
    );
  }

  delete(id: number): Observable<ResultatsModel<EcoleModel>>{
    return this.http.delete<ResultatsModel<EcoleModel>>(this.ecole_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EcoleModel>>('ajoutMessage'))
    );
  }
 

  getEcoleByIdAbonnement(id: number): Observable<ResultatsModel<EcoleModel>>{
    return this.http.get<ResultatsModel<EcoleModel>>(this.ecole_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EcoleModel>>('getEcoleByIdAbonnement'))
    );
  }

  getEcoleByIdEspace(id: number): Observable<ResultatsModel<EcoleModel>>{
    return this.http.get<ResultatsModel<EcoleModel>>(this.ecole_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EcoleModel>>('getEcoleByIdEspace'))
    );
  }

  getEcoleByIdEtablissement(id: number): Observable<ResultatsModel<EcoleModel>>{
    return this.http.get<ResultatsModel<EcoleModel>>(this.ecole_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EcoleModel>>('getEcoleByIdEtablissement'))
    );
  }
  
  getEcoleByMc(data: EcoleModel): Observable<ResultatsModel<EcoleModel>>{
    return this.http.get<ResultatsModel<EcoleModel>>(this.ecole_path + data)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EcoleModel>>('getEcoleByMc'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
