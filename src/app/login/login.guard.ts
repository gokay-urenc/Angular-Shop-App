import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private accountService: AccountService, private router: Router, private alertifyService: AlertifyService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let logged = this.accountService.isLoggedIn();
        if (logged) {
            return true;
        }
        this.router.navigate(["login"]);
        this.alertifyService.error("You are not signed in.")
        return false;
    }
}