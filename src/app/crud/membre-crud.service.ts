import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { ResultatsModel } from '../models/resultats-model';
import { MembreModel } from './../models/personne/membre-model';
import { AppConfig } from '../parametres/app-config';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembreCrudService {

  membre_path = AppConfig.baseURL + "membre/";
  login_path =  AppConfig.baseURL + "login/"; 

  all_elements$ = new BehaviorSubject<ResultatsModel<MembreModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<MembreModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<MembreModel>>{
    return this.http.get<ResultatsModel<MembreModel>>(this.membre_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MembreModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<MembreModel>>{
    return this.http.get<ResultatsModel<MembreModel>>(this.membre_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MembreModel>>('ajoutMessage'))
    );
  }

  
  create(data: MembreModel): Observable<ResultatsModel<MembreModel>>{
    return this.http.post<ResultatsModel<MembreModel>>(this.membre_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MembreModel>>('create'))
    );
  }

  update(data: MembreModel): Observable<ResultatsModel<MembreModel>>{
    return this.http.put<ResultatsModel<MembreModel>>(this.membre_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MembreModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<MembreModel>>{
    return this.http.delete<ResultatsModel<MembreModel>>(this.membre_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MembreModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
