import { Component, OnInit } from "@angular/core";
import { DeviceDataService } from "./../../service/device-data.service";

@Component({
  selector: "app-room-page",
  templateUrl: "./room-page.page.html",
  styleUrls: ["./room-page.page.scss"]
})
export class RoomPagePage implements OnInit {
  devices: any;
  constructor(private deviceDataService: DeviceDataService) {}

  ngOnInit() {
    this.devices = this.deviceDataService.getDeviceData();
  }
}
