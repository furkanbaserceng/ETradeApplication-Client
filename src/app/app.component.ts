import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


//declare var $:any;

//declare var alertify:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ETradeClient';
  constructor(private spinner:NgxSpinnerService){}
  ngOnInit(){

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);

  }

}
