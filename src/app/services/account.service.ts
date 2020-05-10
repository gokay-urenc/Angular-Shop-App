import { Injectable } from "@angular/core";
import { User } from "../login/user";
import { AlertifyService } from './alertify.service';

@Injectable()
export class AccountService {
  constructor(private alertifyService: AlertifyService) {}

  loggedIn = false;

  login(user: User): boolean {
    if (user.userName == "Negan" && user.password == "12345") {
      this.loggedIn = true;
      localStorage.setItem("isLogged", "true");
      this.alertifyService.success("Logged in.");
      return true;
    }
    this.alertifyService.error("Login failed");
    return false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}