import { Injectable } from '@angular/core';
import { AppConfig } from '../parametres/app-config';
import { BehaviorSubject, Observable, of, from } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ResultatsModel } from '../models/resultats-model';
import { ComboEmploieTypeModel } from '../models/combo/comboEmploieType-model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComboEmploieTypeCrudService {

  comboEmploieType_path = AppConfig.baseURL + "comboEmploieType/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<ComboEmploieTypeModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<ComboEmploieTypeModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<ComboEmploieTypeModel>>{
    return this.http.get<ResultatsModel<ComboEmploieTypeModel>>(this.comboEmploieType_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboEmploieTypeModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<ComboEmploieTypeModel>>{
    return this.http.get<ResultatsModel<ComboEmploieTypeModel>>(this.comboEmploieType_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboEmploieTypeModel>>('ajoutMessage'))
    );
  }

  
  create(data: ComboEmploieTypeModel): Observable<ResultatsModel<ComboEmploieTypeModel>>{
    return this.http.post<ResultatsModel<ComboEmploieTypeModel>>(this.comboEmploieType_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboEmploieTypeModel>>('create'))
    );
  }

  update(data: ComboEmploieTypeModel): Observable<ResultatsModel<ComboEmploieTypeModel>>{
    return this.http.put<ResultatsModel<ComboEmploieTypeModel>>(this.comboEmploieType_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboEmploieTypeModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<ComboEmploieTypeModel>>{
    return this.http.delete<ResultatsModel<ComboEmploieTypeModel>>(this.comboEmploieType_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboEmploieTypeModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
