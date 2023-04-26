import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RepeatPasswordValidationDirective } from 'src/app/validators/repeat-password-validation/repeat-password-validation.directive';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss'],
})
export class ChangePasswordFormComponent  implements OnInit {
  @Output('data') sendFormData: EventEmitter<{password: string, validatePassword: string}> = new EventEmitter();

  changePasswordForm: FormGroup = new FormGroup({
    password: new FormControl('', Validators.required),
    validatePassword: new FormControl('', Validators.required),
  }, { validators: RepeatPasswordValidationDirective });
  
  constructor() { }

  ngOnInit() {}

}
