import { Component } from "@angular/core";
import { AccountService } from './services/account.service';
import { AlertifyService } from './services/alertify.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private accountService: AccountService, private alertifyService: AlertifyService) {}

  title = "Angular2Shop";

  isLoggedIn() {
    return this.accountService.isLoggedIn();
  }

  logOut() {
    this.accountService.logOut();
    this.alertifyService.warning("Logged out.");
  }
}