import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    AdminLayoutComponent,
    ComponentsModule
  ]
})
export class AdminLayoutModule { }
