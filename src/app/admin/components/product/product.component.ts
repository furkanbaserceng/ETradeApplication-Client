import { Component, OnInit } from '@angular/core';
import { CustomHttpClientService } from 'src/app/services/common/custom-http-client.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private customHttpService:CustomHttpClientService){}

  ngOnInit(): void { 
    
    // this.customHttpService.get({
    //   controller:"products"
    // }).subscribe(data=>{
    //   console.log(data);
    // })

    // this.customHttpService.get({
    //   controller:"products"
    // },"45452d86-8bbe-4697-87ee-365afbd18909").subscribe(data=>{
    //   console.log(data);
    // })

    // this.customHttpService.post({
    //   controller:"products"
    // },{
    //   name:"front end testt",
    //   stock:111,
    //   price:111.1

    // }).subscribe();

    // this.customHttpService.put({
    //   controller:"products"
    // },{
    //   id:"73de1886-240a-4a22-9fb1-ef9b886c1bd6",
    //   name:"silgi",
    //   stock:44,
    //   price:44.4
    // }).subscribe();

    // this.customHttpService.delete({
    //   controller:"products"
    // },"7c68c37b-d7eb-43a5-931e-2a3581b28a18").subscribe();

    // this.customHttpService.get({
    //   fullEndPoint:"https://dummyjson.com/comments"
    // }).subscribe(data=>{
    //   console.log(data);
    // });

  }

}
