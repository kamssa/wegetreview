import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../parametres/app-config';
import { ComboFonctionModel } from '../models/combo/comboFonction-model';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class ComboFonctionCrudService {

  comboFonction_path = AppConfig.baseURL + "comboFonction/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<ComboFonctionModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<ComboFonctionModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<ComboFonctionModel>>{
    return this.http.get<ResultatsModel<ComboFonctionModel>>(this.comboFonction_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboFonctionModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<ComboFonctionModel>>{
    return this.http.get<ResultatsModel<ComboFonctionModel>>(this.comboFonction_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboFonctionModel>>('ajoutMessage'))
    );
  }

  
  create(data: ComboFonctionModel): Observable<ResultatsModel<ComboFonctionModel>>{
    return this.http.post<ResultatsModel<ComboFonctionModel>>(this.comboFonction_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboFonctionModel>>('create'))
    );
  }

  update(data: ComboFonctionModel): Observable<ResultatsModel<ComboFonctionModel>>{
    return this.http.put<ResultatsModel<ComboFonctionModel>>(this.comboFonction_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboFonctionModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<ComboFonctionModel>>{
    return this.http.delete<ResultatsModel<ComboFonctionModel>>(this.comboFonction_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboFonctionModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
