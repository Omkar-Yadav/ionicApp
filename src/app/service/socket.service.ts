import { Injectable } from "@angular/core";
import * as Rx from "rxjs/Rx";
import { Subject, observable, Observer, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SocketService {
  constructor() {}

  // private subject: Subject<MessageEvent>;

  // public connect(url): Subject<MessageEvent> {
  //   if (!this.subject) {
  //     this.subject = this.create(url);
  //     console.log("Successfully connected: " + url);
  //   }
  //   return this.subject;

  // }

  // public create(url) : Subject<MessageEvent>{
  //   let ws = new WebSocket(url);

  //   let observable = Observable.create(( obs : Observer<MessageEvent>) {
  //     ws.onmessage = obs.next.bind(obs);
  //     ws.onerror = obs.error.bind(obs);
  //     ws.onclose =  obs.complete.bind(obs);
  //   });

  //   let observer = {
  //     next : (data: Object) => {
  //       if ( ws.readyState === WebSocket.OPEN){
  //         ws.send(JSON.stringify(data));
  //       }
  //     }
  //   } ;
  //   return Subject.create(observer , observable);
  // }

  exampleSocket: any = new WebSocket("ws://192.168.43.155:81");

  // exampleSocket.onmessage = function(event) {
  //   console.log(event.data);

  // };

  sendText(
    type,
    text,
    id,
    deviceType,
    devicename,
    roomId,
    roomname,
    status,
    intensity,
    date
  ) {
    var msg = {
      type: type,
      text: text,
      id: id,
      deviceType: deviceType,
      devicename: devicename,
      roomId: roomId,
      roomname: roomname,
      status: status,
      intensity: intensity,
      date: date
    };
    this.exampleSocket.send(JSON.stringify(msg));
  }
}
