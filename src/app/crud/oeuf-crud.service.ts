import { OeufModel } from './../models/oeuf-model';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { AppConfig } from './../parametres/app-config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultatsModel } from '../models/resultats-model';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OeufCrudService {

  crud_path = AppConfig.baseURL + "oeufs/";

  all_elements$ = new BehaviorSubject<ResultatsModel<OeufModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<OeufModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<OeufModel>>{
    return this.http.get<ResultatsModel<OeufModel>>(this.crud_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<OeufModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<OeufModel>>{
    return this.http.get<ResultatsModel<OeufModel>>(this.crud_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<OeufModel>>('ajoutMessage'))
    );
  }

  
  create(data: OeufModel): Observable<ResultatsModel<OeufModel>>{
    return this.http.post<ResultatsModel<OeufModel>>(this.crud_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<OeufModel>>('ajoutMessage'))
    );
  }

  update(data: OeufModel): Observable<ResultatsModel<OeufModel>>{
    return this.http.put<ResultatsModel<OeufModel>>(this.crud_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<OeufModel>>('ajoutMessage'))
    );
  }

  delete(id: number): Observable<ResultatsModel<OeufModel>>{
    return this.http.delete<ResultatsModel<OeufModel>>(this.crud_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<OeufModel>>('ajoutMessage'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
