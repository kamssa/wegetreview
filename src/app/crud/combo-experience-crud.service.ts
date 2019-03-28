import { Injectable } from '@angular/core';
import { of, Observable, from, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../parametres/app-config';
import { ComboExperienceModel } from '../models/combo/comboExperience-model';
import { ResultatsModel } from '../models/resultats-model';

@Injectable({
  providedIn: 'root'
})
export class ComboExperienceCrudService {

  comboExperience_path = AppConfig.baseURL + "comboExperience/";
   

  all_elements$ = new BehaviorSubject<ResultatsModel<ComboExperienceModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<ComboExperienceModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<ComboExperienceModel>>{
    return this.http.get<ResultatsModel<ComboExperienceModel>>(this.comboExperience_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboExperienceModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<ComboExperienceModel>>{
    return this.http.get<ResultatsModel<ComboExperienceModel>>(this.comboExperience_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboExperienceModel>>('ajoutMessage'))
    );
  }

  
  create(data: ComboExperienceModel): Observable<ResultatsModel<ComboExperienceModel>>{
    return this.http.post<ResultatsModel<ComboExperienceModel>>(this.comboExperience_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboExperienceModel>>('create'))
    );
  }

  update(data: ComboExperienceModel): Observable<ResultatsModel<ComboExperienceModel>>{
    return this.http.put<ResultatsModel<ComboExperienceModel>>(this.comboExperience_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboExperienceModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<ComboExperienceModel>>{
    return this.http.delete<ResultatsModel<ComboExperienceModel>>(this.comboExperience_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<ComboExperienceModel>>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
