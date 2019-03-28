import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AppConfig } from '../parametres/app-config';
import { HttpClient } from '@angular/common/http';
import { ComboSpecialiteModel } from '../models/combo/comboSpecialite-model';
import { ResultatsModel }from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class ComboSpecialiteCrudService {

  comboSpecialite_path = AppConfig.baseURL + "comboSpecialite/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<ComboSpecialiteModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<ComboSpecialiteModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<ComboSpecialiteModel>>{
    return this.http.get<ResultatsModel<ComboSpecialiteModel>>(this.comboSpecialite_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboSpecialiteModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<ComboSpecialiteModel>>{
    return this.http.get<ResultatsModel<ComboSpecialiteModel>>(this.comboSpecialite_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboSpecialiteModel>>('ajoutMessage'))
    );
  }

  
  create(data: ComboSpecialiteModel): Observable<ResultatsModel<ComboSpecialiteModel>>{
    return this.http.post<ResultatsModel<ComboSpecialiteModel>>(this.comboSpecialite_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboSpecialiteModel>>('create'))
    );
  }

  update(data: ComboSpecialiteModel): Observable<ResultatsModel<ComboSpecialiteModel>>{
    return this.http.put<ResultatsModel<ComboSpecialiteModel>>(this.comboSpecialite_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboSpecialiteModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<ComboSpecialiteModel>>{
    return this.http.delete<ResultatsModel<ComboSpecialiteModel>>(this.comboSpecialite_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboSpecialiteModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
