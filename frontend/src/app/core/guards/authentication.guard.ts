import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from '../services/registration.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    public registrationService: RegistrationService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.registrationService.isRegistered) {
      return true;
    } else {
      this.router.navigate(['/registration']);
      return false;
    }
  }
}
