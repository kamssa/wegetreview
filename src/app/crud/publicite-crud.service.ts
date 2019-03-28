import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { ResultatsModel } from '../models/resultats-model';
import { PubliciteModel } from '../models/publicite/publicite-model';
import { AppConfig } from '../parametres/app-config';

@Injectable({
  providedIn: 'root'
})
export class PubliciteCrudService {

  publicite_path = AppConfig.baseURL + "publicite/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<PubliciteModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<PubliciteModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<PubliciteModel>>{
    return this.http.get<ResultatsModel<PubliciteModel>>(this.publicite_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PubliciteModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<PubliciteModel>>{
    return this.http.get<ResultatsModel<PubliciteModel>>(this.publicite_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PubliciteModel>>('ajoutMessage'))
    );
  }

  
  create(data: PubliciteModel): Observable<ResultatsModel<PubliciteModel>>{
    return this.http.post<ResultatsModel<PubliciteModel>>(this.publicite_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PubliciteModel>>('ajoutMessage'))
    );
  }

  update(data: PubliciteModel): Observable<ResultatsModel<PubliciteModel>>{
    return this.http.put<ResultatsModel<PubliciteModel>>(this.publicite_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PubliciteModel>>('ajoutMessage'))
    );
  }

  delete(id: number): Observable<ResultatsModel<PubliciteModel>>{
    return this.http.delete<ResultatsModel<PubliciteModel>>(this.publicite_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PubliciteModel>>('ajoutMessage'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
