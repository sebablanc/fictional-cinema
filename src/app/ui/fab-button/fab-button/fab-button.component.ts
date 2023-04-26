import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss'],
})
export class FabButtonComponent  implements OnInit {
  @Input('horizontal') horizontalPosition: string = 'center';
  @Input('vertical') verticalPosition: string = 'bottom';
  @Input('icon') ionIconName: string = 'add';
  @Output('clicked') buttonClicked: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
