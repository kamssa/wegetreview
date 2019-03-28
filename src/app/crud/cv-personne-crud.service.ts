import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ResultatsModel } from '../models/resultats-model';
import { CuriculumViteaModel } from '../models/abonnement/CuriculumVitea-model';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../parametres/app-config';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CvPersonneCrudService {

  cv_personne_path = AppConfig.baseURL + "cvPersonne/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<CuriculumViteaModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<CuriculumViteaModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<CuriculumViteaModel>>{
    return this.http.get<ResultatsModel<CuriculumViteaModel>>(this.cv_personne_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CuriculumViteaModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<CuriculumViteaModel>>{
    return this.http.get<ResultatsModel<CuriculumViteaModel>>(this.cv_personne_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CuriculumViteaModel>>('ajoutMessage'))
    );
  }

  
  create(data: CuriculumViteaModel): Observable<ResultatsModel<CuriculumViteaModel>>{
    return this.http.post<ResultatsModel<CuriculumViteaModel>>(this.cv_personne_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CuriculumViteaModel>>('create'))
    );
  }

  update(data: CuriculumViteaModel): Observable<ResultatsModel<CuriculumViteaModel>>{
    return this.http.put<ResultatsModel<CuriculumViteaModel>>(this.cv_personne_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CuriculumViteaModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<CuriculumViteaModel>>{
    return this.http.delete<ResultatsModel<CuriculumViteaModel>>(this.cv_personne_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CuriculumViteaModel>>('delete'))
    );
  }
  getCvPersonneByIdAbonnement(id: number): Observable<ResultatsModel<CuriculumViteaModel>>{
    return this.http.get<ResultatsModel<CuriculumViteaModel>>(this.cv_personne_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CuriculumViteaModel>>('getCvPersonneByIdAbonnement'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
