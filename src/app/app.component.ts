import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


//declare var $:any;

//declare var alertify:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ETradeClient';
  constructor(private toastrService:ToastrService){}
  ngOnInit(){

    this.toastrService.success("Hoşgeldiniz!","Giriş Başarılı!");

  }

}
