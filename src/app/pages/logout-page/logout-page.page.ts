import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../../service/auth.service";

@Component({
  selector: "app-logout-page",
  templateUrl: "./logout-page.page.html",
  styleUrls: ["./logout-page.page.scss"]
})
export class LogoutPagePage implements OnInit {
  constructor(private hardCodedAuthenticationService: AuthService) {}

  ngOnInit() {
    this.hardCodedAuthenticationService.logout();
  }
}
