import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
})
export class ForgotPasswordFormComponent  implements OnInit {
  @Output('data') sendFormData: EventEmitter<string> = new EventEmitter();
  forgotPasswordForm: FormGroup= new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  constructor() { }

  ngOnInit() {}

}
