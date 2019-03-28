import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ResultatsModel } from '../models/resultats-model';
import { CvAbonnementModel } from '../models/abonnement/CvAbonnement-model';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../parametres/app-config';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CvAbonnementCrudService {

  cv_Abonnement_path = AppConfig.baseURL + "cv_Abonnement/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<CvAbonnementModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<CvAbonnementModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<CvAbonnementModel>>{
    return this.http.get<ResultatsModel<CvAbonnementModel>>(this.cv_Abonnement_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CvAbonnementModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<CvAbonnementModel>>{
    return this.http.get<ResultatsModel<CvAbonnementModel>>(this.cv_Abonnement_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CvAbonnementModel>>('ajoutMessage'))
    );
  }

  
  create(data: CvAbonnementModel): Observable<ResultatsModel<CvAbonnementModel>>{
    return this.http.post<ResultatsModel<CvAbonnementModel>>(this.cv_Abonnement_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CvAbonnementModel>>('create'))
    );
  }

  update(data: CvAbonnementModel): Observable<ResultatsModel<CvAbonnementModel>>{
    return this.http.put<ResultatsModel<CvAbonnementModel>>(this.cv_Abonnement_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CvAbonnementModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<CvAbonnementModel>>{
    return this.http.delete<ResultatsModel<CvAbonnementModel>>(this.cv_Abonnement_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<CvAbonnementModel>>('delete'))
    );
  }
 
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
