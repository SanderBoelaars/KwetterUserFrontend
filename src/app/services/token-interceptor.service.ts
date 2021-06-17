import {Injectable, Injector} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req, next){
    let authService = this.injector.get(AuthenticationService)
    if(authService.getToken() != null) {
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authService.getToken()}`
        }
      })
      return next.handle(tokenizedReq)
    }
    return next.handle(req);
  }
}
