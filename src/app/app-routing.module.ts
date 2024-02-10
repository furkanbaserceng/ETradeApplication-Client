import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/components/home/home.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",loadChildren:()=>import("./ui/components/product/product.module").then(m=>m.ProductModule)},
  {path:"basket",loadChildren:()=>import("./ui/components/basket/basket.module").then(m=>m.BasketModule)},
  {path:"admin",component:AdminLayoutComponent,children:[
    
    {path:"",component:DashboardComponent},
    {path:"customers",loadChildren:()=>import("./admin/components/customer/customer.module").then(m=>m.CustomerModule)},
    {path:"orders",loadChildren:()=>import("./admin/components/order/order.module").then(m=>m.OrderModule)},
    {path:"products",loadChildren:()=>import("./admin/components/product/product.module").then(m=>m.ProductModule)}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
