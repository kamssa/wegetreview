import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../parametres/app-config';
import { ComboPeriodeModel} from '../models/combo/comboPeriode-model';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class ComboPeriodeCrudService {

  comboPeriode_path = AppConfig.baseURL + "comboPeriode/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<ComboPeriodeModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<ComboPeriodeModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<ComboPeriodeModel>>{
    return this.http.get<ResultatsModel<ComboPeriodeModel>>(this.comboPeriode_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboPeriodeModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<ComboPeriodeModel>>{
    return this.http.get<ResultatsModel<ComboPeriodeModel>>(this.comboPeriode_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboPeriodeModel>>('ajoutMessage'))
    );
  }

  
  create(data: ComboPeriodeModel): Observable<ResultatsModel<ComboPeriodeModel>>{
    return this.http.post<ResultatsModel<ComboPeriodeModel>>(this.comboPeriode_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboPeriodeModel>>('create'))
    );
  }

  update(data: ComboPeriodeModel): Observable<ResultatsModel<ComboPeriodeModel>>{
    return this.http.put<ResultatsModel<ComboPeriodeModel>>(this.comboPeriode_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboPeriodeModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<ComboPeriodeModel>>{
    return this.http.delete<ResultatsModel<ComboPeriodeModel>>(this.comboPeriode_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboPeriodeModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
