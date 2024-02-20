import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base-component';
import { CreateProduct } from 'src/app/contracts/create-product';
import { AlertifyPosition } from 'src/app/enums/alertify/alertify-position';
import { MessageType } from 'src/app/enums/alertify/message-type';
import { SpinnerTypeName } from 'src/app/enums/spinner/spinner-type-name';
import { AlertifyService } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent extends BaseComponent implements OnInit{

  constructor(spinner:NgxSpinnerService,  
              private productService:ProductService,
              private alertifyService:AlertifyService){
                super(spinner);
              }

  ngOnInit(): void {
    
  }

  create(name:HTMLInputElement,stock:HTMLInputElement,price:HTMLInputElement){

    this.showSpinner(SpinnerTypeName.BallAtom);

    const createProduct : CreateProduct=new CreateProduct();
    createProduct.name=name.value;
    createProduct.stock=parseInt(stock.value);
    createProduct.price=parseFloat(price.value);

    this.productService.create(createProduct,()=>{

       this.hideSpinner(SpinnerTypeName.BallAtom);
       this.alertifyService.message("Ürün Başarıyla eklendi",{
        messageType:MessageType.Success,
        position:AlertifyPosition.TopRight,
        delay:5
       });

    },errorMessage=>{

      this.alertifyService.message(errorMessage,{
        position:AlertifyPosition.TopRight,
        messageType:MessageType.Error,
        delay:5
      })


    })

  }

}
