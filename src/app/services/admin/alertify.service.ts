import { Injectable } from '@angular/core';
import { AlertifyPosition } from 'src/app/enums/alertify/alertify-position';
import { MessageType } from 'src/app/enums/alertify/message-type';
import { AlertifyOptions } from 'src/app/options/alertify/alertify-options';

declare var alertify:any;


@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message:string,options:Partial<AlertifyOptions>){

    alertify.set('notifier','delay',options.delay);
    alertify.set('notifier','position',options.position);
    alertify[options.messageType](message);

  }

}
