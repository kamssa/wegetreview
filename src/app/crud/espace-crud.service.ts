import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ResultatsModel } from '../models/resultats-model';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../parametres/app-config';
import { tap, catchError } from 'rxjs/operators';
import { EspaceModel } from '../models/espace/espace-model';

@Injectable({
  providedIn: 'root'
})
export class EspaceCrudService {

  espace_path = AppConfig.baseURL + "espace/";
  photoEspace_path = AppConfig.baseURL + "photoEspace/"
   

  all_elements$ = new BehaviorSubject<ResultatsModel<EspaceModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<EspaceModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<EspaceModel>>{
    return this.http.get<ResultatsModel<EspaceModel>>(this.espace_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EspaceModel>>('getAll'))
    );
  }

  get(id: number): Observable<ResultatsModel<EspaceModel>>{
    return this.http.get<ResultatsModel<EspaceModel>>(this.espace_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EspaceModel>>('get'))
    );
  }

  
  create(data: EspaceModel): Observable<ResultatsModel<EspaceModel>>{
    return this.http.post<ResultatsModel<EspaceModel>>(this.espace_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EspaceModel>>('create'))
    );
  }

  update(data: EspaceModel): Observable<ResultatsModel<EspaceModel>>{
    return this.http.put<ResultatsModel<EspaceModel>>(this.espace_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EspaceModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<EspaceModel>>{
    return this.http.delete<ResultatsModel<EspaceModel>>(this.espace_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EspaceModel>>('delete'))
    );
  }
  getEspaceByMc(data: EspaceModel): Observable<ResultatsModel<EspaceModel>>{
    return this.http.post<ResultatsModel<EspaceModel>>(this.espace_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EspaceModel>>('getEspaceByMc'))
    );
  }
  photoEspace(data: EspaceModel): Observable<ResultatsModel<EspaceModel>>{
    return this.http.post<ResultatsModel<EspaceModel>>(this.photoEspace_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EspaceModel>>('photoEspace'))
    );
  }
  getPhotoEspace(id:number): Observable<ResultatsModel<EspaceModel>>{
    return this.http.get<ResultatsModel<EspaceModel>>(this.photoEspace_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<EspaceModel>>('getPhotoEspace'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
