import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const RepeatPasswordValidationDirective: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const validatePassword = control.get('validatePassword');

  return password && validatePassword && password.value !== validatePassword.value ? { areDifferent: true } : null;
};
