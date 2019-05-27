import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { ServiceService } from './service/service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let service = this.injector.get(ServiceService)
    let headers = req.clone({
      setHeaders: {
        Authorization: `${service.getToken()}`
      }
    })

    return next.handle(headers);
  }
}