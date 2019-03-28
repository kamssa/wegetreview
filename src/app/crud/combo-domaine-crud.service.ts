import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ComboDomaineModel } from '../models/combo/comboDomaine-model';
import { ResultatsModel } from '../models/resultats-model';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../parametres/app-config';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComboDomaineCrudService {

  comboDomaine_path = AppConfig.baseURL + "comboDomaine/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<ComboDomaineModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<ComboDomaineModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<ComboDomaineModel>>{
    return this.http.get<ResultatsModel<ComboDomaineModel>>(this.comboDomaine_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboDomaineModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<ComboDomaineModel>>{
    return this.http.get<ResultatsModel<ComboDomaineModel>>(this.comboDomaine_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboDomaineModel>>('ajoutMessage'))
    );
  }

  
  create(data: ComboDomaineModel): Observable<ResultatsModel<ComboDomaineModel>>{
    return this.http.post<ResultatsModel<ComboDomaineModel>>(this.comboDomaine_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboDomaineModel>>('create'))
    );
  }

  update(data: ComboDomaineModel): Observable<ResultatsModel<ComboDomaineModel>>{
    return this.http.put<ResultatsModel<ComboDomaineModel>>(this.comboDomaine_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboDomaineModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<ComboDomaineModel>>{
    return this.http.delete<ResultatsModel<ComboDomaineModel>>(this.comboDomaine_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboDomaineModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
