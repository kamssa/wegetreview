import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ResultatsModel } from '../models/resultats-model';
import { AbonnementModel } from '../models/abonnement/abonnement-model';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../parametres/app-config';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AbonnementCrudService {

  abonnement_path = AppConfig.baseURL + "abonnement/";
  photoAbonnes_path = AppConfig.baseURL + "PhotoAbonnes/";
  abonnementSpécial_path = AppConfig.baseURL + "getAbonnementSpecial/";
 

  all_elements$ = new BehaviorSubject<ResultatsModel<AbonnementModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<AbonnementModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.get<ResultatsModel<AbonnementModel>>(this.abonnement_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('getAll'))
    );
  }

  get(id: number): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.get<ResultatsModel<AbonnementModel>>(this.abonnement_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('get'))
    );
  }

  
  create(data: AbonnementModel): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.post<ResultatsModel<AbonnementModel>>(this.abonnement_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('create'))
    );
  }

  update(data: AbonnementModel): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.put<ResultatsModel<AbonnementModel>>(this.abonnement_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.delete<ResultatsModel<AbonnementModel>>(this.abonnement_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('delete'))
    );
  }
  getAbonnementByMoi(): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.get<ResultatsModel<AbonnementModel>>(this.abonnement_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('getAbonnementByMoi'))
    );
  }
  getAbonnementBani(): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.get<ResultatsModel<AbonnementModel>>(this.abonnement_path)
    .pipe(
      tap(res =>{
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('getAbonnementBani'))
    );
  }
  getAbonnementByIdPersonne(id: number): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.get<ResultatsModel<AbonnementModel>>(this.abonnement_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('getAbonnementByIdPersonne'))
    );
  }
  getDistinctAbonnement(): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.get<ResultatsModel<AbonnementModel>>(this.abonnement_path)
    .pipe(
      tap(res =>{
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('getDistinctAbonnement'))
    );
  }
  getAbonnementSpecial(): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.get<ResultatsModel<AbonnementModel>>(this.abonnementSpécial_path)
    .pipe(
      tap(res =>{
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('getAbonnementSpécial'))
    );
  }
  getAbonnementByLogin(data: string): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.get<ResultatsModel<AbonnementModel>>(this.abonnement_path + data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('getAbonnementByLogin'))
    );
  }
  getAbonnementByIdEspace(id: number): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.get<ResultatsModel<AbonnementModel>>(this.abonnement_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('getAbonnementByIdEspace'))
    );
  }
  getAbonnementByVille(data: AbonnementModel): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.get<ResultatsModel<AbonnementModel>>(this.abonnement_path + data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('getAbonnementByVille'))
    );
  }
  updateVue(data: AbonnementModel): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.put<ResultatsModel<AbonnementModel>>(this.abonnement_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('updateVue'))
    );
  }
  getAbonnementByParam(data: AbonnementModel): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.get<ResultatsModel<AbonnementModel>>(this.abonnement_path + data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('getAbonnementByParam'))
    );
  }
  photoAbonnes(data: AbonnementModel): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.post<ResultatsModel<AbonnementModel>>(this.photoAbonnes_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('photoAbonnes'))
    );
  }
  getPhotoAbonnes(id:number): Observable<ResultatsModel<AbonnementModel>>{
    return this.http.get<ResultatsModel<AbonnementModel>>(this.photoAbonnes_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<AbonnementModel>>('getPhotoAbonnes'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
