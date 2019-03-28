import { Injectable } from '@angular/core';
import { AppConfig } from '../parametres/app-config';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { ComboDiplomeModel } from '../models/combo/comboDiplome-model';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class ComboDiplomeCrudService {

  comboDiplome_path = AppConfig.baseURL + "comboDiplome/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<ComboDiplomeModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<ComboDiplomeModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<ComboDiplomeModel>>{
    return this.http.get<ResultatsModel<ComboDiplomeModel>>(this.comboDiplome_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboDiplomeModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<ComboDiplomeModel>>{
    return this.http.get<ResultatsModel<ComboDiplomeModel>>(this.comboDiplome_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboDiplomeModel>>('ajoutMessage'))
    );
  }

  
  create(data: ComboDiplomeModel): Observable<ResultatsModel<ComboDiplomeModel>>{
    return this.http.post<ResultatsModel<ComboDiplomeModel>>(this.comboDiplome_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboDiplomeModel>>('create'))
    );
  }

  update(data: ComboDiplomeModel): Observable<ResultatsModel<ComboDiplomeModel>>{
    return this.http.put<ResultatsModel<ComboDiplomeModel>>(this.comboDiplome_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboDiplomeModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<ComboDiplomeModel>>{
    return this.http.delete<ResultatsModel<ComboDiplomeModel>>(this.comboDiplome_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboDiplomeModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
