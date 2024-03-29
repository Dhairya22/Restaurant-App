import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private commonService: CommonService,
        private router: Router
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return this.checkIfAuthenticated();
    }


    private checkIfAuthenticated(): boolean {
        let isLoggedIn: any = this.commonService.getAuthToken();
        console.log("🚀 ~ file: auth.guard.ts ~ line 30 ~ AuthGuard ~ checkIfAuthenticated ~ isLoggedIn", isLoggedIn.isValue)
        if (!isLoggedIn) this.router.navigate(['/login']);
        return isLoggedIn.isValue;
    }

}
