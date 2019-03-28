import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AppConfig } from '../parametres/app-config';
import { HttpClient } from '@angular/common/http';
import { ComboNiveauEtudeModel } from '../models/combo/comboNiveauEtude-model';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class ComboNiveauEtudeCrudService {

  comboNiveauEtude_path = AppConfig.baseURL + "comboNiveauEtude/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<ComboNiveauEtudeModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<ComboNiveauEtudeModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<ComboNiveauEtudeModel>>{
    return this.http.get<ResultatsModel<ComboNiveauEtudeModel>>(this.comboNiveauEtude_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboNiveauEtudeModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<ComboNiveauEtudeModel>>{
    return this.http.get<ResultatsModel<ComboNiveauEtudeModel>>(this.comboNiveauEtude_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboNiveauEtudeModel>>('ajoutMessage'))
    );
  }

  
  create(data: ComboNiveauEtudeModel): Observable<ResultatsModel<ComboNiveauEtudeModel>>{
    return this.http.post<ResultatsModel<ComboNiveauEtudeModel>>(this.comboNiveauEtude_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboNiveauEtudeModel>>('create'))
    );
  }

  update(data: ComboNiveauEtudeModel): Observable<ResultatsModel<ComboNiveauEtudeModel>>{
    return this.http.put<ResultatsModel<ComboNiveauEtudeModel>>(this.comboNiveauEtude_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboNiveauEtudeModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<ComboNiveauEtudeModel>>{
    return this.http.delete<ResultatsModel<ComboNiveauEtudeModel>>(this.comboNiveauEtude_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboNiveauEtudeModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
