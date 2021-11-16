import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(
    private commonService: CommonService,
    private router: Router) {}

  canActivate() {
    return this.checkIfAuthenticated();
  }

  private checkIfAuthenticated() {
    let isLoggedIn = this.commonService.checkAuthentication();
    if (isLoggedIn) this.router.navigate(['/list-restaurant']);
    return true;
  }

}
