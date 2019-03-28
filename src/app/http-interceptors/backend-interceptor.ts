import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class BackendInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>>{

        const authReq = req.clone({
            headers: req.headers
                .set('Authorization', '')
                .set('content-type', 'application/json')
        });
        return next.handle(authReq);
    }
}
