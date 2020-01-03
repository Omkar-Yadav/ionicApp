import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authenticate(username, password) {
    console.log("before" + this.isUserLoggedIn());
    if (username === "user" && password === "pass") {
      sessionStorage.setItem("authenticatedUser", username);
      console.log("after" + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }
}
