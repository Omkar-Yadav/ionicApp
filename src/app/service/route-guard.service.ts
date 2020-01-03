import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private hardCodedAuthenticationService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   if (this.hardCodedAuthenticationService.isUserLoggedIn()) {
    return true;
  }
  this.router.navigate(['/login']);
    return false;
  }
}
