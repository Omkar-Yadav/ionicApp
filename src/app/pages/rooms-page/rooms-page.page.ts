import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rooms-page",
  templateUrl: "./rooms-page.page.html",
  styleUrls: ["./rooms-page.page.scss"]
})
export class RoomsPagePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onclickfunction() {
    this.router.navigateByUrl("room-page");
  }

  doSomething(date) {
    console.log("date", date); // 2019-04-22
    console.log(date.getdate());
  }
}
