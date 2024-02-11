import { AlertifyPosition } from "src/app/enums/alertify/alertify-position";
import { MessageType } from "src/app/enums/alertify/message-type";

export class AlertifyOptions {


    messageType:MessageType=MessageType.Notify;
    position:AlertifyPosition=AlertifyPosition.TopRight;
    delay:number=3;



}
