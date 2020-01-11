import { CanActivate, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { DeviceDataService } from "./../../service/device-data.service";

@Component({
  selector: "app-room-page",
  templateUrl: "./room-page.page.html",
  styleUrls: ["./room-page.page.scss"]
})
export class RoomPagePage implements OnInit {
  devices: any;
  constructor(
    private deviceDataService: DeviceDataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("deviceId")) {
        return;
      }
      const deviceId = paramMap.get("deviceId");
      //  this.loadedDevice = this.deviceDataService.getDeviceData(deviceId);
    });

    // this.devices = this.deviceDataService.getDeviceData();
  }
}
