import { Component, OnInit } from '@angular/core';
import { CustomToastrService } from './services/ui/custom-toastr.service';
import { MessageType } from './enums/alertify/message-type';
import { ToastrMessageType } from './enums/toastr/toastr-message-type';
import { ToastrPosition } from './enums/toastr/toastr-position';


//declare var $:any;

//declare var alertify:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ETradeClient';
  constructor(private toastrService:CustomToastrService){}
  ngOnInit(){

    this.toastrService.message("Hoşgeldiniz","Giriş Başarılı!",{
      messageType:ToastrMessageType.Info,
      position:ToastrPosition.BottomLeft
    })

  }

}
