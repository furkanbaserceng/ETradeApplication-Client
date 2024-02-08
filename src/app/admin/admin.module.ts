import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminLayoutModule,
    ComponentsModule
  ],
  exports:[
    AdminLayoutModule,
    ComponentsModule
  ]
})
export class AdminModule { }
