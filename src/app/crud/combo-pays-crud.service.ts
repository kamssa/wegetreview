import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AppConfig } from '../parametres/app-config';
import { HttpClient } from '@angular/common/http';
import { comboPays } from '../models/combo/comboPays-model';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class ComboPaysCrudService {

  comboPays_path = AppConfig.baseURL + "comboPays/";
  

  all_elements$ = new BehaviorSubject<ResultatsModel<comboPays>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<comboPays>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<comboPays>>{
    return this.http.get<ResultatsModel<comboPays>>(this.comboPays_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<comboPays>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<comboPays>>{
    return this.http.get<ResultatsModel<comboPays>>(this.comboPays_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<comboPays>>('ajoutMessage'))
    );
  }

  
  create(data: comboPays): Observable<ResultatsModel<comboPays>>{
    return this.http.post<ResultatsModel<comboPays>>(this.comboPays_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<comboPays>>('create'))
    );
  }

  update(data: comboPays): Observable<ResultatsModel<comboPays>>{
    return this.http.put<ResultatsModel<comboPays>>(this.comboPays_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<comboPays>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<comboPays>>{
    return this.http.delete<ResultatsModel<comboPays>>(this.comboPays_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<comboPays>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
