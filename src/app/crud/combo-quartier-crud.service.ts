import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../parametres/app-config';
import { ComboQuartierModel } from '../models/combo/comboQuartier-model';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class ComboQuartierCrudService {

  comboQuartier_path = AppConfig.baseURL + "comboQuartier/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<ComboQuartierModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<ComboQuartierModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<ComboQuartierModel>>{
    return this.http.get<ResultatsModel<ComboQuartierModel>>(this.comboQuartier_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboQuartierModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<ComboQuartierModel>>{
    return this.http.get<ResultatsModel<ComboQuartierModel>>(this.comboQuartier_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboQuartierModel>>('ajoutMessage'))
    );
  }

  
  create(data: ComboQuartierModel): Observable<ResultatsModel<ComboQuartierModel>>{
    return this.http.post<ResultatsModel<ComboQuartierModel>>(this.comboQuartier_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboQuartierModel>>('create'))
    );
  }

  update(data: ComboQuartierModel): Observable<ResultatsModel<ComboQuartierModel>>{
    return this.http.put<ResultatsModel<ComboQuartierModel>>(this.comboQuartier_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboQuartierModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<ComboQuartierModel>>{
    return this.http.delete<ResultatsModel<ComboQuartierModel>>(this.comboQuartier_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboQuartierModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
