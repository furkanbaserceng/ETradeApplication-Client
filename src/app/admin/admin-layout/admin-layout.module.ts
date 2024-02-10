import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports:[
    AdminLayoutComponent,
    ComponentsModule
  ]
})
export class AdminLayoutModule { }
