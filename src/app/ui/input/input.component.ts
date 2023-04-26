import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent  implements OnInit {
  @Input('type') inputType: string = 'text';
  @Input('placeholder') inputPlaceholder: string = '';
  @Input('inputFormControlName') inputFormControlName: string = '';
  @Input('formGroup') inputFormGroup: any;

  constructor() { }

  ngOnInit() {}

}
