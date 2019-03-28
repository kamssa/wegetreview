import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { ResultatsModel } from '../models/resultats-model';
import { AppConfig } from '../parametres/app-config';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CommandeModel } from '../models/commande/commande-model';

@Injectable({
  providedIn: 'root'
})
export class CommandeCrudService {

  commande_path = AppConfig.baseURL + "commande/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<CommandeModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<CommandeModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<CommandeModel>>{
    return this.http.get<ResultatsModel<CommandeModel>>(this.commande_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CommandeModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<CommandeModel>>{
    return this.http.get<ResultatsModel<CommandeModel>>(this.commande_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CommandeModel>>('ajoutMessage'))
    );
  }

  
  create(data: CommandeModel): Observable<ResultatsModel<CommandeModel>>{
    return this.http.post<ResultatsModel<CommandeModel>>(this.commande_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CommandeModel>>('create'))
    );
  }

  update(data: CommandeModel): Observable<ResultatsModel<CommandeModel>>{
    return this.http.put<ResultatsModel<CommandeModel>>(this.commande_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CommandeModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<CommandeModel>>{
    return this.http.delete<ResultatsModel<CommandeModel>>(this.commande_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CommandeModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
