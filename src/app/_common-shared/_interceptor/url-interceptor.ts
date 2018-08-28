import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class UrlInterceptor implements HttpInterceptor {
    intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        // const url = 'http://localhost/uidhtml-modular-website';
        const url = 'http://uidhtml.com/uidhtml-api';
        req = req.clone({
            url : url + req.url
        });
        return next.handle(req);
    }
}