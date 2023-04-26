import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWithHeaderComponent } from './layout-with-header/layout-with-header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    LayoutWithHeaderComponent
  ],
  exports: [
    LayoutWithHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class LayoutsModule { }
