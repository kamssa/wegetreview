import {Injectable} from '@angular/core';
import {
  ActivatedRoute,
  CanActivate,
  CanLoad,
  CanActivateChild,
  Router,
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlSegment, UrlTree
} from '@angular/router';
import {HttpClient, HttpRequest, HttpResponse, HttpHeaders} from '@angular/common/http';
import * as jwt_decode from "jwt-decode";

@Injectable({providedIn: 'root'})
export class AuthGuardTogetService implements CanActivate, CanActivateChild, CanLoad {

  constructor(private route: ActivatedRoute, public router: Router, public http: HttpClient) {
  }

  canLoad (route: Route) {
    return true;
  }

  canActivateChild (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.getSession();
    return true;
  }

  getSession(){
    const code = new Date().getTime();
    const sessionId = window.btoa(unescape(encodeURIComponent( code+"UserID"+code )));
    sessionStorage.setItem('Session_users', sessionId);
  }


  Base64_encode( str ) {
    return window.btoa(unescape(encodeURIComponent( str )));
  }

  Base64_decode( str ) {
    return decodeURIComponent(escape(window.atob( str )));
  }


  getToken(): boolean {
/*    const localStorange = localStorage.getItem('togetToken');
    const log = localStorage.getItem('log');
    if(localStorange && log){
      let jwt = jwt_decode(localStorange);
      let dateNow = new Date().getTime();
      let dateExp = jwt.exp * 1000;
      let ddd=  new Date(dateExp).toLocaleString();
      // console.log(ddd);
      if(jwt.sub == log){
        if(dateExp < dateNow){
          this.claering();
          return false;
        }else{
          return true;
        }
      }else{
        this.claering();
        return false;
      }
    }else{
      this.claering();
      return false;

    }*/
return true;
  }


}

