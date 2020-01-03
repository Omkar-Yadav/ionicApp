import { Injectable } from "@angular/core";
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import * as data from "src/assets/devices.json";

@Injectable({
  providedIn: "root"
})
export class DeviceDataService {
  constructor() {}

  devices: any;

  ngOnInit() {
    console.log(this.getDeviceData("deviceid"));
  }

  getDeviceData(deviceId) {
    debugger;
    console.log((this.devices = (data as any).default));
    return (this.devices = (data as any).default);
  }
}
