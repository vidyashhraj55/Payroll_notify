import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ServiceService } from './service/service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private service: ServiceService) {

  }
  canActivate(): boolean {
    if (this.service.loggedIn()) {
      // console.log("vidya");
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}