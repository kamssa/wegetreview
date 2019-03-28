import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { AppConfig } from '../parametres/app-config';
import { ComboModel } from '../models/combo/combo-model';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class ComboCrudService {

  combo_path = AppConfig.baseURL + "combo/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<ComboModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<ComboModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<ComboModel>>{
    return this.http.get<ResultatsModel<ComboModel>>(this.combo_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<ComboModel>>{
    return this.http.get<ResultatsModel<ComboModel>>(this.combo_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboModel>>('ajoutMessage'))
    );
  }

  
  create(data: ComboModel): Observable<ResultatsModel<ComboModel>>{
    return this.http.post<ResultatsModel<ComboModel>>(this.combo_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboModel>>('create'))
    );
  }

  update(data: ComboModel): Observable<ResultatsModel<ComboModel>>{
    return this.http.put<ResultatsModel<ComboModel>>(this.combo_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<ComboModel>>{
    return this.http.delete<ResultatsModel<ComboModel>>(this.combo_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
