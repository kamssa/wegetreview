import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AppConfig } from '../parametres/app-config';
import { HttpClient } from '@angular/common/http';
import { PartenaireModel } from '../models/ecole/partenaire-model'; 
import { ResultatsModel } from '../models/resultats-model';


@Injectable({
  providedIn: 'root'
})
export class PartenaireCrudService {

 partenaire_path = AppConfig.baseURL + "partenaireToget/";


  all_elements$ = new BehaviorSubject<ResultatsModel<PartenaireModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<PartenaireModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<PartenaireModel>>{
    return this.http.get<ResultatsModel<PartenaireModel>>(this.partenaire_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PartenaireModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<PartenaireModel>>{
    return this.http.get<ResultatsModel<PartenaireModel>>(this.partenaire_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PartenaireModel>>('ajoutMessage'))
    );
  }

  
  create(data: PartenaireModel): Observable<ResultatsModel<PartenaireModel>>{
    return this.http.post<ResultatsModel<PartenaireModel>>(this.partenaire_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PartenaireModel>>('create'))
    );
  }

  update(data: PartenaireModel): Observable<ResultatsModel<PartenaireModel>>{
    return this.http.put<ResultatsModel<PartenaireModel>>(this.partenaire_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PartenaireModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<PartenaireModel>>{
    return this.http.delete<ResultatsModel<PartenaireModel>>(this.partenaire_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PartenaireModel>>('delete'))
    );
  }

  getPhotoPartenaireToget(id:number):Observable<ResultatsModel<PartenaireModel>>{
    return this.http.get<ResultatsModel<PartenaireModel>>(this.partenaire_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<PartenaireModel>>('getPhotoPartenaireToget'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
