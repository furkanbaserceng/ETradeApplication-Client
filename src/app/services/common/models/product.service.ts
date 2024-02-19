import { Injectable } from '@angular/core';
import { CustomHttpClientService } from '../custom-http-client.service';
import { CreateProduct } from 'src/app/contracts/create-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private customHttpClientService:CustomHttpClientService) { }

  create(product:CreateProduct,successCallBack?:any){

    this.customHttpClientService.post({
      controller:"products"
    },product).subscribe(result=>{
      
      successCallBack();

    })

  }
}
