import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { AppConfig } from '../parametres/app-config';
import { ComboContratTypeModel } from '../models/combo/comboContratType-model';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class ComboContratTypeCrudService {

  comboContratType_path = AppConfig.baseURL + "comboContratType/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<ComboContratTypeModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<ComboContratTypeModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<ComboContratTypeModel>>{
    return this.http.get<ResultatsModel<ComboContratTypeModel>>(this.comboContratType_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboContratTypeModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<ComboContratTypeModel>>{
    return this.http.get<ResultatsModel<ComboContratTypeModel>>(this.comboContratType_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboContratTypeModel>>('ajoutMessage'))
    );
  }

  
  create(data: ComboContratTypeModel): Observable<ResultatsModel<ComboContratTypeModel>>{
    return this.http.post<ResultatsModel<ComboContratTypeModel>>(this.comboContratType_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboContratTypeModel>>('create'))
    );
  }

  update(data: ComboContratTypeModel): Observable<ResultatsModel<ComboContratTypeModel>>{
    return this.http.put<ResultatsModel<ComboContratTypeModel>>(this.comboContratType_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboContratTypeModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<ComboContratTypeModel>>{
    return this.http.delete<ResultatsModel<ComboContratTypeModel>>(this.comboContratType_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboContratTypeModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
