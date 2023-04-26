import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from './date-formatter/date-format.pipe';

@NgModule({
  declarations: [
    DateFormatPipe
  ],
  exports: [
    DateFormatPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DateFormatPipe
  ]
})
export class PipesModule { }
