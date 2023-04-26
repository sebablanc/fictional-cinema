import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginFormComponent } from './login-form/login-form.component';
import { UiModule } from '../ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordModalComponent } from './forgot-password-modal/forgot-password-modal.component';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { EditFilmFormComponent } from './edit-film-form/edit-film-form.component';
import { DateFormatPipe } from '../pipes/date-formatter/date-format.pipe';



@NgModule({
  declarations: [
    LoginFormComponent,
    ForgotPasswordModalComponent,
    ForgotPasswordFormComponent,
    ChangePasswordFormComponent,
    EditFilmFormComponent
  ],
  exports: [
    LoginFormComponent,
    ForgotPasswordModalComponent,
    ChangePasswordFormComponent,
    EditFilmFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    IonicModule,
    UiModule
  ],
  providers: [
    DateFormatPipe
  ]
})
export class MyComponentsModule { }
