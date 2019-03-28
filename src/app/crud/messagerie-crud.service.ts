import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ResultatsModel } from '../models/resultats-model';
import { MessagerieModel } from './../models/messagerie/messagerie-model';
import { AppConfig } from './../parametres/app-config';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagerieCrudService {

  messagerie_path = AppConfig.baseURL + "messagerie/";
  send_path = AppConfig.baseURL + "sendMessage/";
  transfer_path = AppConfig.baseURL + "transferMessage/";
  message_par_personne_path = AppConfig.baseURL + "getMessageByPersonne/";
  update_Statut_Message = AppConfig.baseURL + "updateStatutMessage/"


  all_elements$ = new BehaviorSubject<ResultatsModel<MessagerieModel>>(null);
  one_element$ = new BehaviorSubject<ResultatsModel<MessagerieModel>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResultatsModel<MessagerieModel>>{
    return this.http.get<ResultatsModel<MessagerieModel>>(this.messagerie_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MessagerieModel>>('ajoutMessage'))
    );
  }

  get(id: number): Observable<ResultatsModel<MessagerieModel>>{
    return this.http.get<ResultatsModel<MessagerieModel>>(this.messagerie_path + id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MessagerieModel>>('get'))
    );
  }

  
  create(data: MessagerieModel): Observable<ResultatsModel<MessagerieModel>>{
    return this.http.post<ResultatsModel<MessagerieModel>>(this.messagerie_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MessagerieModel>>('create'))
    );
  }

  update(data: MessagerieModel): Observable<ResultatsModel<MessagerieModel>>{
    return this.http.put<ResultatsModel<MessagerieModel>>(this.messagerie_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MessagerieModel>>('update'))
    );
  }

  delete(id: number): Observable<ResultatsModel<MessagerieModel>>{
    return this.http.delete<ResultatsModel<MessagerieModel>>(this.messagerie_path + id)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MessagerieModel>>('delete'))
    );
  }
  getMessageByPersonneId(id:number):Observable<ResultatsModel<MessagerieModel>>{
    return this.http.get<ResultatsModel<MessagerieModel>>(this.message_par_personne_path + id)
    .pipe(
      tap(res=>{
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MessagerieModel>>('getMessageByPersonneId'))
    );
  }
  
  
  updateStatut(data: MessagerieModel): Observable<ResultatsModel<MessagerieModel>>{
    return this.http.put<ResultatsModel<MessagerieModel>>(this.update_Statut_Message, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MessagerieModel>>('updateStatut'))
    );
  }

  sendMessagePost(data: MessagerieModel): Observable<ResultatsModel<MessagerieModel>>{
    return this.http.post<ResultatsModel<MessagerieModel>>(this.send_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MessagerieModel>>('sendMessage'))
    );
  }

  sendMessageGet(data: MessagerieModel): Observable<ResultatsModel<MessagerieModel>>{
    return this.http.get<ResultatsModel<MessagerieModel>>(this.send_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MessagerieModel>>('sendMessageGet'))
    );
  }

  transferMessageGet(data: MessagerieModel): Observable<ResultatsModel<MessagerieModel>>{
    return this.http.get<ResultatsModel<MessagerieModel>>(this.transfer_path)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MessagerieModel>>('transferMessageGet'))
    );
  }


  transferMessagePost(data: MessagerieModel): Observable<ResultatsModel<MessagerieModel>>{
    return this.http.post<ResultatsModel<MessagerieModel>>(this.transfer_path, data)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<ResultatsModel<MessagerieModel>>('transferMessagePost'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
