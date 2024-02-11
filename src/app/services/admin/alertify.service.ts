import { Injectable } from '@angular/core';
import { AlertifyPosition } from 'src/app/enums/alertify/alertify-position';
import { MessageType } from 'src/app/enums/alertify/message-type';

declare var alertify:any;


@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message:string,messageType:MessageType,position:AlertifyPosition,delay:number=5){

    alertify.set('notifier','delay',delay);
    alertify.set('notifier','position',position);
    alertify[messageType](message);

  }

}
