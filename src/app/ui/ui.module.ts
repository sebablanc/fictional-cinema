import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilmCardComponent } from './film-card/film-card.component';
import { RateComponent } from './rate/rate.component';
import { FabButtonComponent } from './fab-button/fab-button/fab-button.component';
import { SearchButtonComponent } from './search-button/search-button/search-button.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    LinkComponent,
    FilmCardComponent,
    RateComponent,
    FabButtonComponent,
    SearchButtonComponent
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    LinkComponent,
    FilmCardComponent,
    RateComponent,
    FabButtonComponent,
    SearchButtonComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    IonicModule
  ]
})
export class UiModule { }
