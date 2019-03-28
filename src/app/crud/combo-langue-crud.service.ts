import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../parametres/app-config';
import { ResultatsModel } from '../models/resultats-model';
import { ComboLangueModel } from '../models/combo/comboLangue-model';

@Injectable({
  providedIn: 'root'
})
export class ComboLangueCrudService {

  comboLangue_path = AppConfig.baseURL + "comboLangue/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<ComboLangueModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<ComboLangueModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<ComboLangueModel>>{
    return this.http.get<ResultatsModel<ComboLangueModel>>(this.comboLangue_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboLangueModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<ComboLangueModel>>{
    return this.http.get<ResultatsModel<ComboLangueModel>>(this.comboLangue_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboLangueModel>>('ajoutMessage'))
    );
  }

  
  create(data: ComboLangueModel): Observable<ResultatsModel<ComboLangueModel>>{
    return this.http.post<ResultatsModel<ComboLangueModel>>(this.comboLangue_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboLangueModel>>('create'))
    );
  }

  update(data: ComboLangueModel): Observable<ResultatsModel<ComboLangueModel>>{
    return this.http.put<ResultatsModel<ComboLangueModel>>(this.comboLangue_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboLangueModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<ComboLangueModel>>{
    return this.http.delete<ResultatsModel<ComboLangueModel>>(this.comboLangue_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboLangueModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
