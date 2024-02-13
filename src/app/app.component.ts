import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from './base/base-component';
import { SpinnerTypeName } from './enums/spinner/spinner-type-name';


//declare var $:any;

//declare var alertify:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
  title = 'ETradeClient';
  constructor(spinner:NgxSpinnerService){
    super(spinner);
  }
  ngOnInit(){

    this.showSpinner(SpinnerTypeName.BallAtom);

  }

}
